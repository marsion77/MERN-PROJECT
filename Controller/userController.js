const userService = require("../Services/userServices")

const createuser = async (req,res)=>{
    userdata = await userService.createUserData(req.body)
    res.send(userdata)
    console.log(userdata);
    
}

module.exports = {
    createuser
}