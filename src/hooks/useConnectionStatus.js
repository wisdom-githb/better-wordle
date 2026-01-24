// Hook for monitoring connection status
import { useState, useEffect } from 'react';
import { defaultStateSync } from '../lib/stateSync';

/**
 * Hook to monitor online/offline connection status
 * @returns {Object} Connection status and queue information
 */
export function useConnectionStatus() {
  const [isOnline, setIsOnline] = useState(() => {
    return typeof navigator !== 'undefined' ? navigator.onLine : true;
  });
  const [queueSize, setQueueSize] = useState(0);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      // Process queued updates when coming back online
      defaultStateSync.processQueue();
    };
    
    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Update queue size periodically
    const interval = setInterval(() => {
      setQueueSize(defaultStateSync.getQueueSize());
    }, 1000);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearInterval(interval);
    };
  }, []);

  return {
    isOnline,
    queueSize,
    hasQueuedUpdates: queueSize > 0,
  };
}
