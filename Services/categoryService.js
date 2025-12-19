const categoryModel = require("../Model/categoryModel")



//creating Category

const categoryCreate = async (body) => {
  data = await categoryModel.create(body)
  return data
}

module.exports = {
    categoryCreate
} 