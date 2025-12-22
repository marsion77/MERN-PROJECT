const quantityModel = require("../Model/quantityModel")

//creating Category

const quantityCreate = async (body) => {
  data = await quantityModel.create(body)
  return data
}



module.exports = {
    quantityCreate
} 