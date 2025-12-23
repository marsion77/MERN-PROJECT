const mongoose = require("mongoose")

const quantitydata = new mongoose.Schema({
    value: { type: Number, required: true }
})

module.exports = mongoose.model("Quantity", quantitydata)
