const mongoose = require("mongoose")

const cleintdetails = new mongoose.Schema({
    ItemName:{
        type: String,
        required: true
    },
    Quantity: {
        type: String,
        required: true
    },
    Price:{
        type: Number,
        required: true

    },
    CategoryId:{
        type: String,
        required: true
    }
})


const itemsModel = mongoose.model("Items",cleintdetails)
module.exports = itemsModel