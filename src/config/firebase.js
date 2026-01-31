// Firebase configuration
// Replace these values with your Firebase project configuration
// Get these from Firebase Console > Project Settings > General > Your apps

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import { getFunctions, httpsCallable } from 'firebase/functions';

// Your web app's Firebase configuration
// TODO: Replace with your Firebase project config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "your-api-key",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "your-auth-domain",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "your-project-id",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "your-storage-bucket",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "your-messaging-sender-id",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "your-app-id",
  databaseURL:
    import.meta.env.VITE_FIREBASE_DATABASE_URL ||
    `https://${import.meta.env.VITE_FIREBASE_PROJECT_ID || "your-project-id"}-default-rtdb.firebaseio.com`,
};

// In non-development builds, guard against accidentally shipping a build that
// still uses placeholder Firebase configuration values. Failing fast here
// makes misconfiguration obvious rather than causing confusing runtime errors.
const mode = import.meta.env.MODE || 'development';
if (mode !== 'development' && mode !== 'test') {
  const placeholderTokens = [
    'your-api-key',
    'your-auth-domain',
    'your-project-id',
    'your-storage-bucket',
    'your-messaging-sender-id',
    'your-app-id',
  ];

  const hasPlaceholder = Object.values(firebaseConfig).some((value) =>
    typeof value === 'string' && placeholderTokens.some((token) => value.includes(token)),
  );

  if (hasPlaceholder) {
    throw new Error(
      'Invalid Firebase configuration: one or more VITE_FIREBASE_* environment variables are missing or still use placeholder values.',
    );
  }
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firebase Realtime Database
export const database = getDatabase(app);

// Initialize Cloud Firestore
export const firestore = getFirestore(app);

// Cloud Functions
export const functions = getFunctions(app);

// Callable helpers for gift subscription
export const createGiftCheckoutSessionCallable = () => httpsCallable(functions, 'createGiftCheckoutSession');
export const adminGiftSubscriptionCallable = () => httpsCallable(functions, 'adminGiftSubscription');

// Google Auth Provider
export const googleProvider = new GoogleAuthProvider();

export default app;
