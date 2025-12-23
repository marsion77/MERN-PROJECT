const menuModel = require("../Model/menuModel")



//creating Menu

const menuCreate = async (body) => {
  data = await menuModel.create(body)
  console.log(data);
  
  return data
}

module.exports = {
    menuCreate
} 