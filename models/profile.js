const mongoose = require("mongoose");

const profileSchema =new mongoose.Schema({
  email:{
    type: String,
    // required:true
  },
  password:{
    type:String
  },
 
  username:{
    type:String,
    // required:true
  },
  bio:{
    type:String,
    // required:true
  },
  image:{
    default:""
  }
},{timestamps:true})

module.exports = mongoose.model("Profile",profileSchema)