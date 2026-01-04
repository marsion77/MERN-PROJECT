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


const cartRoutes = require('./Router/cartRouter');
app.use('/api/cart', cartRoutes); // new line only



app.use("/users", userRouter) 
app.use("/category", categoryRouter)
app.use("/menu",menuRouter)
app.use("/quantity", quantityRouter)





database.on('open',()=>{
    app.listen(9080,()=>{
        console.log('Server is Running on 9080 ✅');
    })
})
