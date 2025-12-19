const menuModel = require("../Model/menuModel")



//creating Menu

const menuCreate = async (body) => {
  data = await menuModel.create(body)
  return data
}

module.exports = {
    menuCreate
} 