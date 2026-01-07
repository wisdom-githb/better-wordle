// Game constants

import { WORD_LENGTH } from "./wordle";

// Flip settings - tiles flip sequentially
export const FLIP_MS = 500;      // how long a single tile flip takes
export const FLIP_DELAY_PER_TILE = 300;  // delay between each tile starting its flip
// Total time for all tiles to finish flipping: flip duration + (number of tiles - 1) * delay per tile
export const FLIP_COMPLETE_MS = FLIP_MS + (WORD_LENGTH - 1) * FLIP_DELAY_PER_TILE;
