// models/orderModel.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    menuId: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu', required: true },
    quantityId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quantity', required: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
