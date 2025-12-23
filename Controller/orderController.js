const orderService = require("../Services/orderService");

// Create Order
const createOrder = async (req, res) => {
    try {
        const orderData = await orderService.createOrder(req.body);
        res.status(201).json(orderData);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get Orders with Aggregation
const getOrders = async (req, res) => {
    try {
        const orders = await orderService.getAggregatedOrders();
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    createOrder,
    getOrders
};
