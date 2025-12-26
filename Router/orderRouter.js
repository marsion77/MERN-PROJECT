const express = require("express");
const router = express.Router();

const orderController = require("../Controller/orderController");

// Create Order
router.post("/addorder", orderController.createOrder);

// Get All Orders (with aggregation)
router.get("/orders/:id", orderController.getOrders);

module.exports = router;


