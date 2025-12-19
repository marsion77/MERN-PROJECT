const mongoose = require("mongoose")

const categorydata = new mongoose.Schema({
          name: { 
            type: String,
            required: true 
          },

          categoryId: {
            type: String,
            required: true
          }
})

const categoryModel = mongoose.model("categoryData", categorydata)
module.exports = categoryModel 