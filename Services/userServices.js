const userModel = require("../Model/userModel")

const createUserData = async (body)=>{
    data = await userModel.create(body)
    console.log(body);
    
    return data
}

module.exports = {
    createUserData
}