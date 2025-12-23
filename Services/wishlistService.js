// Services/wishlistService.js
const Wishlist = require('../Model/wishlistModel');
const mongoose = require("mongoose")

// Add item to wishlist
async function addToWishlist(body) {
    const wishlistItem = await Wishlist.create(body);
    return wishlistItem;
}

// Get wishlist items with aggregation
async function getWishlist(userId) {
    const wishlist = await Wishlist.aggregate([
        { $match: { userId: new mongoose.Types.ObjectId(userId) } }, // filter by user

        {
            $lookup: {
                from: 'menus',
                localField: 'menuId',
                foreignField: '_id',
                as: 'menu'
            }
        },



        
        { $unwind: '$menu' },

        {
            $lookup: {
                from: 'quantities',
                localField: 'quantityId',
                foreignField: '_id',
                as: 'quantity'
            }
        },
        { $unwind: '$quantity' },

        {
            $lookup: {
                from: 'categories',
                localField: 'categoryId',
                foreignField: '_id',
                as: 'category'
            }
        },
        { $unwind: '$category' },

        {
            $project: {
                _id: 0,
                itemName: '$menu.name',
                quantity: '$quantity.value',
                price: '$menu.price',
                category: '$category.name',
                addedAt: '$createdAt'
            }
        }
    ]);

    return wishlist;
}

module.exports = {
    addToWishlist,
    getWishlist
};
