// routes/wishlistRoute.js
const express = require('express');
const router = express.Router();
const wishlistController = require('../Controller/wishlistController');

// Add to wishlist
router.post('/add', wishlistController.createWishlistItem);

// Get wishlist for a user
router.get('/:userId', wishlistController.getWishlistItems);

module.exports = router;
