const userModel = require("../Model/userModel")
const credentialModel = require("../Model/credentialModel")
const sendMail = require("../Utils/mailer")


// Creating a UserData
const createUserData = async (body)=>{
    data = await userModel.create(body)
    console.log(body);  
    return data
}



// Login Creation
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

const loginUserService = async (email, password) => {
  const user = await userModel.findOne({ email });
  if (!user) {
    throw new Error("Invalid email or password");
  }


  if (user.password !== password) {
    throw new Error("Invalid email or password");
  }


  const otp = generateOTP();

 
  const credential = new credentialModel({
    email: user.email,
    password: user.password,
    otp
  });

  await credential.save();


  await sendMail(user.email, otp);


  return {
    success: true,
    message: "OTP sent to your email successfully",
    email: user.email

  };
};

// Verify Login
const verifyLoginData = async()=>{

}

module.exports = {
    createUserData,
    loginUserService,
    verifyLoginData
}