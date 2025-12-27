const menuServices = require("../Services/menuServices")



//creating the menu
const createMenu = async (req, res) => {
    data = await menuServices.menuCreate(req.body)
    console.log(data);

    res.send(data)

}

module.exports = {
    createMenu
}