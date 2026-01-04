const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu', required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  name: String  // Store name at order time
});

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },  // email/IP
  items: [orderItemSchema],
  totalAmount: { type: Number, required: true },
  orderId: { type: String, required: true },  // Razorpay order_id
  paymentId: String,  // Filled after payment
  status: { type: String, enum: ['pending', 'paid', 'failed'], default: 'pending' },
  address: {
    name: String,
    address1: String,
    address2: String,
    mobile: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
