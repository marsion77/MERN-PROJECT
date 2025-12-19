const express = require('express')
const app = express()
const database = require("./Config/db")

app.use(express.json())

const userRouter = require("./Router/userRouter")
const itemsRouter = require("./Router/itemsRouter")
const categoryRouter = require("../MERN-PROJECT/Router/categoryRouter")
const menuRouter = require("./Router/menuRouter")
const quantityRouter = require("./Router/quantityRouter")


app.use("/users", userRouter) 
app.use("/category", categoryRouter)
app.use("/menu", menuRouter)
app.use("/quantity", quantityRouter)

app.use("/item", itemsRouter) 




database.on('open',()=>{
    app.listen(9080,()=>{
console.log('Server is Running');
})
})

database.on("error",()=>{
    console.log('Error While running the server');  
})