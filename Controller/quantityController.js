const quantityService = require("../Services/quantityService")



//creating the category
const createQuantity = async (req, res)=>{
           data = await quantityService.quantityCreate(req.body)
    res.send(data) 
    
}

module.exports = {
    createQuantity
} 