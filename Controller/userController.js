const userService = require("../Services/userServices")


// Creating the User Data
const createuser = async (req,res)=>{
    userdata = await userService.createUserData(req.body)
    res.send(userdata)
    console.log(userdata);   
}

// Creating Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const logindata = await userService.loginUserService(email, password);

    res.status(200).json(logindata);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};


// Verify Login
const verifyLogin = async (req,res)=>{
        try {
        const data = await UserService.verifyLoginData(req.body);
        res.send(data);

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error" });
    }

}



module.exports = {
    createuser,
    login,
    verifyLogin
}