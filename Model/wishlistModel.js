// models/wishlistModel.js
const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // assuming you have users
    menuId: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu', required: true },
    quantityId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quantity', required: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Wishlist', wishlistSchema);
