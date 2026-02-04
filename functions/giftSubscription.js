/**
 * Gift subscription Cloud Functions (2nd gen)
 *
 * Uses Firebase params and Secret Manager (no deprecated functions.config()).
 *
 * - createGiftCheckoutSession: callable; creates Stripe Checkout for gifting subscription
 * - stripeGiftWebhook: HTTPS; Stripe webhook for checkout.session.completed
 * - adminGiftSubscription: callable; admin can grant premium without payment
 *
 * Setup:
 *   1. Secrets (Stripe secret + gift webhook signing secret):
 *      firebase functions:secrets:set STRIPE_SECRET_KEY
 *      firebase functions:secrets:set STRIPE_GIFT_WEBHOOK_SECRET
 *   2. String param STRIPE_PRICE_ID: set in functions/.env or .env.<projectId>
 *      STRIPE_PRICE_ID=price_...
 *   See gift-subs.md for full steps.
 */

const { onCall, onRequest, HttpsError } = require('firebase-functions/v2/https');
const { defineString, defineSecret } = require('firebase-functions/params');
const admin = require('firebase-admin');
const Stripe = require('stripe');

if (!admin.apps.length) {
  admin.initializeApp();
}

const auth = admin.auth();
const firestore = admin.firestore();

const ADMIN_EMAIL = 'abhijeetsridhar14@gmail.com';

// Params: loaded from .env (e.g. functions/.env or .env.<projectId>) or prompted at deploy
const stripePriceId = defineString('STRIPE_PRICE_ID', { description: 'Stripe premium price ID (e.g. price_...)' });

// Secrets: set via firebase functions:secrets:set STRIPE_SECRET_KEY etc.
const stripeSecret = defineSecret('STRIPE_SECRET_KEY');
const giftWebhookSecret = defineSecret('STRIPE_GIFT_WEBHOOK_SECRET');

/**
 * Callable: createGiftCheckoutSession(recipientUid, baseUrl)
 */
exports.createGiftCheckoutSession = onCall(
  { secrets: [stripeSecret] },
  async (request) => {
    if (!request.auth) {
      throw new HttpsError('unauthenticated', 'You must be signed in to gift a subscription.');
    }

    const recipientUid = request.data?.recipientUid;
    if (!recipientUid || typeof recipientUid !== 'string') {
      throw new HttpsError('invalid-argument', 'recipientUid is required.');
    }

    let secret;
    let priceId;
    try {
      secret = (stripeSecret.value() || '').trim();
      priceId = (stripePriceId.value() || '').trim();
    } catch (paramErr) {
      throw new HttpsError(
        'failed-precondition',
        'Stripe is not configured. Set STRIPE_SECRET_KEY secret and STRIPE_PRICE_ID (e.g. in functions/.env).'
      );
    }
    if (!secret || !priceId) {
      throw new HttpsError(
        'failed-precondition',
        'Stripe is not configured. Set STRIPE_SECRET_KEY secret and STRIPE_PRICE_ID (e.g. in functions/.env).'
      );
    }

    let recipientEmail;
    try {
      const recipientUser = await auth.getUser(recipientUid);
      recipientEmail = recipientUser.email || null;
    } catch (err) {
      throw new HttpsError('not-found', 'Recipient user not found.');
    }

    if (!recipientEmail) {
      throw new HttpsError(
        'failed-precondition',
        'Recipient has no email; cannot send gift checkout.'
      );
    }

    const baseUrl = (request.data?.baseUrl || '').replace(/\/$/, '');
    if (!baseUrl) {
      throw new HttpsError('invalid-argument', 'baseUrl is required (e.g. origin + base path).');
    }
    const successUrl = `${baseUrl}?subscription=success&gift=1`;
    const cancelUrl = `${baseUrl}?subscription=cancelled`;

    try {
      const stripe = new Stripe(secret, { apiVersion: '2023-10-16' });

      const session = await stripe.checkout.sessions.create({
        mode: 'subscription',
        customer_email: recipientEmail,
        line_items: [{ price: priceId, quantity: 1 }],
        success_url: successUrl,
        cancel_url: cancelUrl,
        metadata: { recipient_uid: recipientUid },
        subscription_data: { metadata: { recipient_uid: recipientUid } },
      });

      return { url: session.url };
    } catch (stripeErr) {
      throw new HttpsError(
        'failed-precondition',
        'Unable to start gift checkout. Please try again or contact support.'
      );
    }
  }
);

/**
 * HTTPS: Stripe webhook for gift checkout completion.
 */
exports.stripeGiftWebhook = onRequest(
  { secrets: [stripeSecret, giftWebhookSecret] },
  async (req, res) => {
    if (req.method !== 'POST') {
      res.status(405).send('Method Not Allowed');
      return;
    }

    const sig = req.headers['stripe-signature'];
    const secret = (stripeSecret.value() || '').trim();
    const giftWebhookSecretVal = (giftWebhookSecret.value() || '').trim();
    if (!giftWebhookSecretVal || !secret) {
      console.error('Gift webhook or Stripe secret not configured');
      res.status(500).send('Webhook not configured');
      return;
    }

    const rawBody = req.rawBody;
    if (!rawBody) {
      console.error('Raw body not available for Stripe signature verification');
      res.status(500).send('Raw body not available');
      return;
    }

    const stripe = new Stripe(secret, { apiVersion: '2023-10-16' });
    let event;
    try {
      const payload = typeof rawBody === 'string' ? rawBody : rawBody.toString();
      event = stripe.webhooks.constructEvent(payload, sig, giftWebhookSecretVal);
    } catch (err) {
      console.error('Webhook signature verification failed:', err.message);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    if (event.type !== 'checkout.session.completed') {
      res.status(200).send('OK');
      return;
    }

    const session = event.data.object;
    const recipientUid = session.metadata?.recipient_uid || session.subscription_data?.metadata?.recipient_uid;
    if (!recipientUid) {
      res.status(200).send('OK');
      return;
    }

    const subscriptionId = session.subscription;
    if (!subscriptionId) {
      console.error('No subscription ID in session');
      res.status(200).send('OK');
      return;
    }

    try {
      const subscription = await stripe.subscriptions.retrieve(subscriptionId);
      const status = subscription.status;
      const currentPeriodEnd = subscription.current_period_end;
      const created = subscription.created;

      const subscriptionDoc = {
        id: subscription.id,
        status: status === 'active' || status === 'trialing' ? status : 'active',
        current_period_end: currentPeriodEnd,
        created,
        updated_at: Math.floor(Date.now() / 1000),
      };

      const ref = firestore.doc(`customers/${recipientUid}/subscriptions/${subscription.id}`);
      await ref.set(subscriptionDoc);

      await auth.setCustomUserClaims(recipientUid, { stripeRole: 'premium' });
    } catch (err) {
      console.error('Error processing gift webhook:', err);
      res.status(500).send('Webhook handler error');
      return;
    }

    res.status(200).send('OK');
  }
);

/**
 * Callable: adminGiftSubscription(recipientUid)
 */
exports.adminGiftSubscription = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'You must be signed in.');
  }

  if (request.auth.token.email !== ADMIN_EMAIL) {
    throw new HttpsError('permission-denied', 'Only the admin can grant subscriptions without payment.');
  }

  const recipientUid = request.data?.recipientUid;
  if (!recipientUid || typeof recipientUid !== 'string') {
    throw new HttpsError('invalid-argument', 'recipientUid is required.');
  }

  try {
    await auth.setCustomUserClaims(recipientUid, { stripeRole: 'premium' });

    const docId = `admin_gift_${Date.now()}`;
    await firestore.doc(`customers/${recipientUid}/subscriptions/${docId}`).set({
      id: docId,
      status: 'active',
      current_period_end: Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60,
      created: Math.floor(Date.now() / 1000),
      updated_at: Math.floor(Date.now() / 1000),
    });
  } catch (err) {
    console.error('adminGiftSubscription error:', err);
    throw new HttpsError('internal', err.message || 'Failed to grant subscription.');
  }

  return { success: true };
});
