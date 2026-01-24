/**
 * Firebase Cloud Functions for Better Wordle
 * 
 * This file exports all deployed Cloud Functions.
 */

const { cleanupExpiredRooms, cleanupExpiredRoomsOnWrite } = require('./cleanupExpiredRooms');

module.exports = {
  cleanupExpiredRooms,
  cleanupExpiredRoomsOnWrite,
};
