const mongoose = require("mongoose")

const quantitydata = new mongoose.Schema({
          quantity: { 
            type: String,
            required: true 
          }
})

const quantityModel = mongoose.model("quantityData", quantitydata)
module.exports = quantityModel 