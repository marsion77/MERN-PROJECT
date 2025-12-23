const Order = require('../Model/orderModel');

// Create Order
async function createOrder(body) {
    const data = await Order.create(body);
    return data;
}

// Get Orders with Aggregation
async function getAggregatedOrders() {
    const orders = await Order.aggregate([
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
                _id: 1,
                itemName: '$menu.name',       // from menus collection
                quantity: '$quantity.amount', // make sure this matches your quantity field name
                price: '$menu.price',         // from menus collection
                category: '$category.name',   // from categories collection
                createdAt: 1
            }
        }
    ]);

    return orders;
}

module.exports = {
    createOrder,
    getAggregatedOrders
};
