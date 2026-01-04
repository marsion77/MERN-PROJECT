const express = require('express');
const router = express.Router();
const orderController = require('../Controller/orderControllers');

router.post('/create-order', orderController.createRazorpayOrder);
router.post('/verify-payment', orderController.verifyPayment);

module.exports = router;
