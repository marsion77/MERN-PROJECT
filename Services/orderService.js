const Razorpay = require('razorpay');
const Order = require('../Model/orderModel');
const Cart = require('../Model/cartModel');

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET
// });


const razorpay = new Razorpay({
  key_id: 'rzp_test_1dpLfjCuT58rc1',
  key_secret: '6pM55iDqK5RVtWqARhNZAd7p'
});


async function createOrder(userId, totalAmount, address) {
  // 1. Create Razorpay order
  const razorpayOrder = await razorpay.orders.create({
    amount: totalAmount * 100,  // Paisa
    currency: 'INR',
    receipt: `order_${Date.now()}`
  });

  // 2. Save order to DB
  const order = new Order({
    userId,
    totalAmount,
    orderId: razorpayOrder.id,
    items: [],  // Will populate after payment
    address
  });

  await order.save();
  return { order, razorpayOrder };
}

async function verifyPayment(userId, razorpayOrderId, razorpayPaymentId, razorpaySignature) {
  try {
    // Verify Razorpay signature
    razorpay.verifyPaymentSignature({
      order_id: razorpayOrderId,
      payment_id: razorpayPaymentId,
      signature: razorpaySignature
    });

    // Move cart items to order
    const cart = await Cart.findOne({ userId });
    if (cart && cart.items.length) {
      const order = await Order.findOneAndUpdate(
        { userId, orderId: razorpayOrderId },
        { 
          paymentId: razorpayPaymentId,
          status: 'paid',
          items: cart.items.map(item => ({
            menuItemId: item.menuItemId,
            quantity: item.quantity,
            price: item.menuItemId?.price || 0,
            name: item.menuItemId?.name
          }))
        },
        { new: true }
      ).populate('items.menuItemId');

      // Clear cart
      await Cart.findOneAndUpdate({ userId }, { items: [], totalAmount: 0 });

      return order;
    }
  } catch (error) {
    throw new Error('Payment verification failed');
  }
}

console.log('🔑 Razorpay Keys:', {
  key_id: process.env.RAZORPAY_KEY_ID ? 'LOADED' : 'MISSING',
  secret: process.env.RAZORPAY_KEY_SECRET ? 'LOADED' : 'MISSING'
});


module.exports = { createOrder, verifyPayment };
