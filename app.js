const express = require('express')
const app = express()
const database = require("./Config/db")

const userRouter = require("./Router/userRouter")

app.use(express.json())

app.use("/users", userRouter)


database.on('open',()=>{
    app.listen(9080,()=>{
console.log('Server is Running');

    })
})

database.on("error",()=>{
    console.log('Error While running the server');  
})