const express = require ("express")
router = express.Router()

const quantityController = require("../Controller/quantityController")

router.post("/addQuantity", quantityController.createQuantity)

module.exports = router