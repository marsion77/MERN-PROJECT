const itemsServer = require("../Services/itemsService")



const createItems = async(req,res)=>{
    items = await itemsServer.createItemsData(req.body)
    console.log(items);
    
    res.send(items)

}


module.exports = {
    createItems
}