const express = require ("express")
router = express.Router()

const userController = require("../Controller/userController")


router.post("/adduser",userController.createuser)


module.exports = router