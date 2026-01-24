// Hook for game mode detection and configuration
import { useMemo, useCallback } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { parseGameUrl, buildGameUrl } from '../lib/routing';
import { getGameMode, getModeFeatures, modeSupportsFeatureFlag } from '../lib/gameModes';

/**
 * Hook to extract and normalize game mode from URL
 * Replaces complex mode detection logic from Game.jsx
 * 
 * @returns {Object} Game mode configuration
 */
export function useGameMode() {
  const params = useParams();
  const [searchParams] = useSearchParams();
  
  const gameConfig = useMemo(() => {
    return parseGameUrl(params, searchParams);
  }, [params, searchParams]);
  
  const modeConfig = useMemo(() => {
    return getGameMode(gameConfig.mode);
  }, [gameConfig.mode]);
  
  const isMultiplayer = useMemo(() => {
    return gameConfig.mode === 'multiplayer';
  }, [gameConfig.mode]);
  
  const seo = useMemo(() => {
    return modeConfig?.seo || {
      title: 'Game – Better Wordle',
      description: 'Play Better Wordle game modes including daily, marathon, speedrun and multi-board Wordle-style puzzles.',
    };
  }, [modeConfig]);
  
  const features = useMemo(() => {
    return getModeFeatures(gameConfig.mode);
  }, [gameConfig.mode]);

  const supportsFeature = useCallback((feature) => {
    return modeSupportsFeatureFlag(gameConfig.mode, feature);
  }, [gameConfig.mode]);

  return {
    ...gameConfig,
    modeConfig,
    isMultiplayer,
    seo,
    features,
    supportsFeature,
    buildUrl: (overrides = {}) => buildGameUrl({ ...gameConfig, ...overrides }),
  };
}
