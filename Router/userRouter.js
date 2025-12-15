const express = require ("express")
router = express.Router()

const userController = require("../Controller/userController")

// Adding User
router.post("/adduser",userController.createuser)

// Login OTP Generating
router.post("/login", userController.login)

// Login Verification
router.post("/loginverify", userController.verifyLogin)




module.exports = router