const mongoose = require("mongoose")

const menuData = mongoose.Schema({
    itemname: {
        type: String
    },

    price: {
        type: Number
    },

    quantity: {
        type: Number,
    },

    categoryId: {
        type: String,
    }

})

const menuModel = mongoose.model("MenuModel", menuData)
module.exports = menuModel 