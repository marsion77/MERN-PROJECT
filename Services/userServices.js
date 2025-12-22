const userModel = require("../Model/userModel")
const credentialModel = require("../Model/credentialModel")
const sendMail = require("../Utils/mailer")



// Creating a UserData
const createUserData = async (body) => {
  data = await userModel.create(body)
  console.log(body);
  return data
}



// Login the User
const loginUserData = async (body) => {
  const { email, password } = body;

  // Step 1: Find user by email
  const user = await userModel.findOne({ email });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  // Step 2: Direct password comparison
  if (user.password !== password) {
    throw new Error("Invalid email or password");
  }

  // Step 3: Login success
  return {
    message: "Login successful",
    userId: user._id,
    email: user.email,
  };
};


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
const verifyLoginData = async (body) => {


  console.log(body);


  const { email, otp } = body

  const Otpdata = await credentialModel.findOne({ "email": body.email })

  if (!Otpdata) {
    return { success: false, message: "OTP not found. Please request a new one." };


  console.log(body);
  const { email, otp } = body
  const Otpdata = await credentialModel.findOne({ "email": body.email })

  if (!Otpdata) {
    return { success: false, message: "OTP not found. Please request a new one." };

  } return {
    success: true,
    message: "OTP verified successfully"
  }
}

//create category
const createCategorydata = async (body)=>{
        
}


module.exports = {
  createUserData,
  loginUserData,
  loginUserService,
  verifyLoginData
}