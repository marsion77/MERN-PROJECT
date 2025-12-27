const express = require("express")
router = express.Router()

const categoryController = require("../Controller/categoryController")

router.post("/createCategory", categoryController.createCategory)



router.get("/getCategories", categoryController.getCategories)
router.get("/getCategory/:id", categoryController.getCategory)

module.exports = router