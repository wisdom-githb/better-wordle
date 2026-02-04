# Gift subscription – what you need to do

This file lists everything you need to do to get gift subscriptions working (paid gift + admin gift).

---

## 1. Prerequisites

- Firebase project with Firestore and the **Stripe Extension** already set up (subscription for self works).
- Stripe account with the same **secret key** and **price ID** you use for the Extension.
- Admin email for free gift: **abhijeetsridhar14@gmail.com** (hardcoded in the app and in the Cloud Function).

---

## 2. Install and deploy Cloud Functions

From the project root:

```bash
cd functions
npm install
cd ..
firebase deploy --only functions
```

After deploy, note the URL of **stripeGiftWebhook** (e.g. `https://us-central1-YOUR_PROJECT.cloudfunctions.net/stripeGiftWebhook`). You will use it in step 3.

---

## 3. Configure Stripe for the gift webhook

1. Open [Stripe Dashboard → Developers → Webhooks](https://dashboard.stripe.com/webhooks).
2. Click **Add endpoint**.
3. **Endpoint URL**: paste the **stripeGiftWebhook** URL from step 2.
4. **Events to send**: select **checkout.session.completed**.
5. Click **Add endpoint**.
6. Open the new endpoint and click **Reveal** under **Signing secret**. Copy the value (starts with `whsec_`).
7. Keep this secret for step 4.

Use a **separate** webhook from the one used by the Stripe Extension so the gift flow has its own signing secret.

---

## 4. Set secrets and params (Stripe keys)

Gift subscription uses **Firebase params and Secret Manager** (no deprecated `functions.config()`).

### 4a. Set the two secrets

From the project root, run each command and **paste the value when prompted** (input is hidden):

```bash
firebase functions:secrets:set STRIPE_SECRET_KEY
```
Paste your Stripe **secret key** (same as the Stripe Extension, e.g. `sk_live_...`).

```bash
firebase functions:secrets:set STRIPE_GIFT_WEBHOOK_SECRET
```
Paste the **gift webhook signing secret** from step 3 (starts with `whsec_`).

### 4b. Set the price ID (string param)

Create a file `functions/.env` (or `functions/.env.better-wrodle` for your project) with:

```
STRIPE_PRICE_ID=price_1Stdu50s95qSLn7SYt1qcvNa
```

Use the same price ID as `VITE_STRIPE_PRICE_ID` in your app. You can copy from `functions/.env.example` and replace the placeholder.

On first deploy, if `STRIPE_PRICE_ID` is missing, the CLI may prompt you to enter it and then save it to `functions/.env.<projectId>`.

### 4c. Redeploy

```bash
firebase deploy --only functions
```

---

## 5. Firestore rules

No changes are required. Subscription documents are written by Cloud Functions (admin SDK). Existing rules for `customers/{uid}/subscriptions` and content access via `stripeRole` are enough.

---

## 6. What to test

1. **Paid gift (non-admin)**  
   - Sign in as a normal user, open Friends, click **Gift** for a friend.  
   - You should be redirected to Stripe Checkout. Pay; after success you are redirected back.  
   - The friend should get premium (custom claim + Firestore subscription doc).

2. **Admin gift (no payment)**  
   - Sign in as **abhijeetsridhar14@gmail.com**, open Friends, click **Gift** for a friend.  
   - No Stripe redirect; you should see “Premium granted to &lt;name&gt;”.  
   - The friend should get premium.

3. **Recipient has no email**  
   - If the friend’s Firebase Auth user has no email, paid gift will fail with “Recipient has no email; cannot send gift checkout.” That is expected.

---

## 8. If Stripe webhook signature verification fails

Stripe needs the **raw** request body to verify the signature. Firebase exposes this as `request.rawBody` in `onRequest` handlers. If you see signature errors in the function logs:

- Ensure you did not add global body-parser middleware that consumes the body before the webhook runs.
- If your runtime does not provide `rawBody`, you may need to switch the webhook to an Express app with `express.raw({ type: 'application/json' })` for that route only (see Firebase + Stripe webhook docs).

---

## 8. Quick checklist

- [ ] `cd functions && npm install && cd ..`
- [ ] `firebase deploy --only functions` (note **stripeGiftWebhook** URL)
- [ ] Stripe Dashboard: add webhook endpoint with URL = **stripeGiftWebhook**, event **checkout.session.completed**
- [ ] Copy the webhook **Signing secret** (`whsec_...`)
- [ ] `firebase functions:secrets:set STRIPE_SECRET_KEY` (paste Stripe secret when prompted)
- [ ] `firebase functions:secrets:set STRIPE_GIFT_WEBHOOK_SECRET` (paste `whsec_...` when prompted)
- [ ] Create `functions/.env` with `STRIPE_PRICE_ID=price_...` (or use `.env.<projectId>`)
- [ ] `firebase deploy --only functions` again
- [ ] Test paid gift (normal user) and admin gift (abhijeetsridhar14@gmail.com)
