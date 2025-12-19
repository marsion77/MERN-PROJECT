const express = require ("express")
router = express.Router()

const menuController = require("../Controller/menuController")

router.post("/createMenu", menuController.createMenu)

module.exports = router