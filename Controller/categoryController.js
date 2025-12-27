const categoryService = require("../Services/categoryService")



//creating the category
const createCategory = async (req, res) => {
    data = await categoryService.categoryCreate(req.body)
    res.send(data)
}


// ✅ ADD THESE GET FUNCTIONS
const getCategories = async (req, res) => {
    try {
        data = await categoryService.getAllCategories()
        res.send(data)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const getCategory = async (req, res) => {
    try {
        data = await categoryService.getCategoryById(req.params.id)
        res.send(data)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

module.exports = {
    createCategory,
    getCategories,
    getCategory

}