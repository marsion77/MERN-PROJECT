const mongoose = require("mongoose")

const menuData = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" }
})

module.exports = mongoose.model("Menu", menuData)
