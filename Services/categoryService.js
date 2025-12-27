const categoryModel = require("../Model/categoryModel")



//creating Category

const categoryCreate = async (body) => {
  data = await categoryModel.create(body)
  return data
}



// ✅ ADD THESE GET FUNCTIONS
const getAllCategories = async () => {
  data = await categoryModel.find()
  return data
}

const getCategoryById = async (id) => {
  data = await categoryModel.findById(id)
  if (!data) {
    throw new Error("Category not found")
  }
  return data
}

module.exports = {
    categoryCreate,
    getAllCategories,
    getCategoryById

} 