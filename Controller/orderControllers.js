const orderService = require('../Services/orderService');

const createRazorpayOrder = async (req, res) => {
  try {
    const { userId, totalAmount, address } = req.body;
    console.log('Creating order:', { userId, totalAmount, address });
    
    if (!totalAmount || totalAmount <= 0) {
      return res.status(400).json({ success: false, message: 'Invalid amount' });
    }
    
    const result = await orderService.createOrder(userId, totalAmount, address);
    res.json({ 
      success: true, 
      order: result.order,
      razorpayOrder: result.razorpayOrder,
      key: process.env.RAZORPAY_KEY_ID 
    });
  } catch (error) {
    console.error('Order creation error:', error);
    res.status(400).json({ success: false, message: error.message });
  }
};

const verifyPayment = async (req, res) => {
  try {
    const { userId, razorpayOrderId, razorpayPaymentId, razorpaySignature } = req.body;
    
    const order = await orderService.verifyPayment(
      userId, 
      razorpayOrderId, 
      razorpayPaymentId, 
      razorpaySignature
    );
    
    res.json({ success: true, order });
  } catch (error) {
    console.error('Payment verification error:', error);
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { createRazorpayOrder, verifyPayment };
