const mongoose = require("mongoose")

const userdata = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    otp:{
        type: Number,
        required: true
    }
})

const credentialModel = mongoose.model("OTP", userdata)
module.exports = credentialModel


