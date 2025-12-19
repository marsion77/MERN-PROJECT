const itemsModel = require("../Model/itemsModel")


const createItemsData = async(body)=>{
    data = await itemsModel.create(body)
    console.log(body);
    return data   
}


module.exports = {
    createItemsData
}
