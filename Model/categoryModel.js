const mongoose = require("mongoose")

const categorydata = new mongoose.Schema({
          name: { 
            type: String,
            required: true 
          },
})

const categoryModel = mongoose.model("category", categorydata)
module.exports = categoryModel 