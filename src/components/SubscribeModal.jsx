import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../hooks/useAuth';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import { firestore } from '../config/firebase';

/**
 * Modal for subscription payment
 * This component handles the subscription flow and payment processing
 */
/**
 * Modal for subscription payment using Firebase Extension for Stripe
 * Creates a checkout session in Firestore, which the extension processes
 */
export default function SubscribeModal({ isOpen, onRequestClose, onSubscriptionComplete }) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const unsubscribeRef = useRef(null);
  const timeoutRef = useRef(null);

  // Get the Stripe Price ID from environment variable or use default
  // Replace 'price_XXXXX' with your actual Stripe Price ID
  const STRIPE_PRICE_ID = import.meta.env.VITE_STRIPE_PRICE_ID || 'price_XXXXX';

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
        unsubscribeRef.current = null;
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, []);

  const handleSubscribe = async () => {
    if (!user?.uid) {
      setError('You must be signed in to subscribe');
      return;
    }

    if (STRIPE_PRICE_ID === 'price_XXXXX') {
      setError('Stripe Price ID not configured. Please set VITE_STRIPE_PRICE_ID in your .env file.');
      return;
    }

    // Cleanup any existing listeners
    if (unsubscribeRef.current) {
      unsubscribeRef.current();
      unsubscribeRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    setLoading(true);
    setError(null);
    setPaymentProcessing(true);

    try {
      // Create checkout session document in Firestore
      // The Firebase Extension listens to this and creates a Stripe Checkout session
      const docRef = await addDoc(
        collection(firestore, 'customers', user.uid, 'checkout_sessions'),
        {
          price: STRIPE_PRICE_ID,
          success_url: `${window.location.origin}/?subscription=success`,
          cancel_url: `${window.location.origin}/?subscription=cancelled`,
        }
      );

      // Listen for the sessionId from the extension
      const unsubscribe = onSnapshot(docRef, (doc) => {
        if (!doc.exists()) return;
        
        const data = doc.data();
        
        if (data?.error) {
          // Show error from extension
          setError(data.error.message || 'An error occurred while creating the checkout session.');
          setPaymentProcessing(false);
          setLoading(false);
          if (unsubscribeRef.current) {
            unsubscribeRef.current();
            unsubscribeRef.current = null;
          }
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
          }
          return;
        }

        if (data?.url) {
          // We have a Stripe Checkout URL, redirect to it
          if (unsubscribeRef.current) {
            unsubscribeRef.current();
            unsubscribeRef.current = null;
          }
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
          }
          window.location.assign(data.url);
        }
      });

      unsubscribeRef.current = unsubscribe;

      // Cleanup listener after 30 seconds if no response
      timeoutRef.current = setTimeout(() => {
        if (unsubscribeRef.current) {
          unsubscribeRef.current();
          unsubscribeRef.current = null;
        }
        if (paymentProcessing) {
          setError('Timeout waiting for checkout session. Please try again.');
          setPaymentProcessing(false);
          setLoading(false);
        }
        timeoutRef.current = null;
      }, 30000);

    } catch (err) {
      console.error('Subscription error:', err);
      setError(err?.message || 'Failed to start subscription. Please try again.');
      setPaymentProcessing(false);
      setLoading(false);
      
      // Cleanup on error
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
        unsubscribeRef.current = null;
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    }
  };

  const handleClose = () => {
    if (!loading && !paymentProcessing) {
      setError(null);
      onRequestClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.82)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 3000,
      }}
    >
      <div
        style={{
          backgroundColor: '#1a1a1b',
          borderRadius: 16,
          padding: 32,
          maxWidth: 480,
          width: '92vw',
          textAlign: 'center',
          boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
        }}
      >
        <h2
          style={{
            margin: 0,
            marginBottom: 16,
            fontSize: 24,
            fontWeight: 'bold',
            color: '#ffffff',
            letterSpacing: 1,
          }}
        >
          Subscribe to Premium
        </h2>

        <div
          style={{
            marginBottom: 24,
            fontSize: 16,
            color: '#d7dadc',
            lineHeight: 1.6,
          }}
        >
          <div style={{ marginBottom: 16 }}>
            Unlock premium features for just <strong style={{ color: '#6aaa64' }}>$2/month</strong>
          </div>

          <div
            style={{
              textAlign: 'left',
              backgroundColor: '#27272a',
              padding: 16,
              borderRadius: 8,
              marginBottom: 16,
            }}
          >
            <div style={{ fontSize: 14, color: '#d7dadc', marginBottom: 8 }}>
              <strong style={{ color: '#6aaa64' }}>Premium Features:</strong>
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: 20,
                fontSize: 14,
                color: '#d7dadc',
                lineHeight: 1.8,
              }}
            >
              <li>Themed Wordle games</li>
              <li>Custom color themes</li>
              <li>Premium Member badge</li>
              <li>And more coming soon!</li>
            </ul>
          </div>

          <div style={{ fontSize: 12, color: '#818384', fontStyle: 'italic' }}>
            Subscription auto-renews monthly. Cancel anytime.
          </div>
        </div>

        {error && (
          <div
            style={{
              marginBottom: 16,
              padding: 12,
              backgroundColor: '#7f1d1d',
              borderRadius: 8,
              color: '#fca5a5',
              fontSize: 14,
            }}
          >
            {error}
          </div>
        )}

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <button
            onClick={handleClose}
            disabled={loading || paymentProcessing}
            style={{
              flex: 1,
              minWidth: 120,
              padding: '14px 0',
              borderRadius: 10,
              border: '1px solid #3a3a3c',
              background: 'transparent',
              color: '#ffffff',
              fontSize: 14,
              fontWeight: 'bold',
              cursor: loading || paymentProcessing ? 'not-allowed' : 'pointer',
              letterSpacing: 1,
              textTransform: 'uppercase',
              opacity: loading || paymentProcessing ? 0.5 : 1,
            }}
          >
            Cancel
          </button>

          <button
            onClick={handleSubscribe}
            disabled={loading || paymentProcessing}
            style={{
              flex: 1,
              minWidth: 120,
              padding: '14px 0',
              borderRadius: 10,
              border: 'none',
              background: paymentProcessing ? '#818384' : '#6aaa64',
              color: '#ffffff',
              fontSize: 14,
              fontWeight: 'bold',
              cursor: loading || paymentProcessing ? 'not-allowed' : 'pointer',
              letterSpacing: 1,
              textTransform: 'uppercase',
            }}
          >
            {paymentProcessing
              ? 'Processing...'
              : loading
              ? 'Loading...'
              : 'Subscribe for $2/month'}
          </button>
        </div>

        <div
          style={{
            marginTop: 16,
            fontSize: 11,
            color: '#818384',
            lineHeight: 1.4,
          }}
        >
          By subscribing, you agree to our terms of service. Payment will be processed securely.
        </div>
      </div>
    </div>
  );
}
