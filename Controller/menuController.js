const menuServices = require("../Services/menuServices")

// Create a menu item
const createMenu = async (req, res) => {
    try {
        const data = await menuServices.menuCreate(req.body)
        res.status(201).send(data)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

// Get all menu items
const getMenus = async (req, res) => {
    try {
        const data = await menuServices.getAllMenus()
        res.send(data)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

// Get menu by ID
const getMenu = async (req, res) => {
    try {
        const data = await menuServices.getMenuById(req.params.id)
        res.send(data)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}

module.exports = {
    createMenu,
    getMenus,
    getMenu
}
