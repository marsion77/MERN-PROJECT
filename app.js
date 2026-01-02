const express = require('express')
const app = express()
const database = require("./Config/db")
// const cors = require("cors");


app.use(express.json())


const userRouter = require("./Router/userRouter")
const categoryRouter = require("./Router/categoryRouter")
const menuRouter = require("./Router/menuRouter")
const quantityRouter = require("./Router/quantityRouter")
const orderRouer = require("./Router/orderRouter")
const wishlistRouter = require("./Router/wishlistRouter")



app.use(cors());
app.use("/users", userRouter) 
app.use("/categories", categoryRouter)
app.use("/menu", menuRouter)
app.use("/quantity", quantityRouter)
app.use("/order",orderRouer)
app.use("/wishlist", wishlistRouter)



database.on('open',()=>{
    app.listen(9080,()=>{
console.log('Server is Running');
})
})

database.on("error",()=>{
    console.log('Error While running the server');  
})

