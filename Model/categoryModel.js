const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, "Name is required"],
    unique: true,
    enum: ['Veg', 'Non-Veg', 'Vegan', 'Jain']  // Fixed 4 categories [web:20][web:24]
  },
  description: {
    type: String,
    required: [true, "Description is required"]
  }
}, { timestamps: true });

module.exports = mongoose.model("Category", categorySchema);  // Collection: categories [memory:9]
