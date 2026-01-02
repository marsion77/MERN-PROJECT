const menuModel = require("../Model/menuModel")

const menuCreate = async (body) => {
    const data = await menuModel.create(body)
    return data
}

const getAllMenus = async () => {
    const data = await menuModel.find().populate("categoryId", "name")
    return data
}

const getMenuById = async (id) => {
    const data = await menuModel.findById(id).populate("categoryId", "name")
    if (!data) throw new Error("Menu item not found")
    return data
}

module.exports = {
    menuCreate,
    getAllMenus,
    getMenuById
}
