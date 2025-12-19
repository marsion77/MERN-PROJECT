const express = require ("express")
router = express.Router()

const categoryController = require("../Controller/categoryController")

router.post("/createCategory", categoryController.createCategory)

module.exports = router