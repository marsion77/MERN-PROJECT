const categoryService = require("../Services/categoryService")



//creating the category
const createCategory = async (req, res)=>{
           data = await categoryService.categoryCreate(req.body)
    res.send(data) 
    
}

module.exports = {
    createCategory
}