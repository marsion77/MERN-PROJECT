const express = require("express")
router = express.Router()

const itemsController = require("../Controller/itemsController") 


// Adding Items
router.post("/add", itemsController.createItems)


module.exports = router