// Controller/wishlistController.js
const wishlistService = require('../Services/wishlistService');

// POST: Add item to wishlist
const createWishlistItem = async (req, res) => {
    try {
        const wishlistItem = await wishlistService.addToWishlist(req.body);
        res.status(201).json({ message: 'Item added to wishlist', wishlistItem });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET: Get wishlist items
const getWishlistItems = async (req, res) => {
    try {
        const userId = req.params.userId; // get userId from params
        const wishlist = await wishlistService.getWishlist(userId);
        res.status(200).json(wishlist);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    createWishlistItem,
    getWishlistItems
};
