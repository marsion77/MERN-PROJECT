const express = require('express')
const cors = require("cors");  // ← ADD THIS LINE
const app = express()
const database = require("./Config/db")

app.use(cors());  // ← UNCOMMENT & ADD THIS
app.use(express.json())

// Your routers - ALL GOOD ✅
const userRouter = require("./Router/userRouter")
const categoryRouter = require("./Router/categoryRouter")
const menuRouter = require("./Router/menuRouter")
const quantityRouter = require("./Router/quantityRouter")
const orderRouer = require("./Router/orderRouter")
const wishlistRouter = require("./Router/wishlistRouter")
import cartRoutes from './Model/cart.js';
import paymentRoutes from './routes/payment.js';
import cartController from '../controllers/cartController.js';
import paymentController from '../controllers/paymentController.js';

app.use('/api/cart', cartRoutes);
app.use('/api/payment', paymentRoutes);


app.use("/users", userRouter) 
app.use("/category", categoryRouter)
app.use("/menu",menuRouter)

app.use("/quantity", quantityRouter)
app.use("/order",orderRouer)
app.use("/wishlist", wishlistRouter)



// router.post('/add/:menuItemId', auth,cartController.add);
// router.get('/', auth, cartController.getCart);
// router.delete('/remove/:menuItemId', auth, cartController.removeFromCart);


// router.post('/create-order', auth, paymentController.createOrder);
// router.post('/verify', auth, paymentController.verifyPayment);

database.on('open',()=>{
    app.listen(9080,()=>{
        console.log('Server is Running on 9080 ✅');
    })
})
