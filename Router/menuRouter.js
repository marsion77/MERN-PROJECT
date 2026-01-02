const express = require("express")
const router = express.Router()
const menuController = require("../Controller/menuController")

router.post("/createMenu", menuController.createMenu)
router.get("/getMenus", menuController.getMenus)
router.get("/getMenu/:id", menuController.getMenu)

module.exports = router
