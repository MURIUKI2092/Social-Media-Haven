const mongoose = require("mongoose");

const followSchema =new mongoose.Schema({
  email:{
    type: String,
    // required:true
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

module.exports = mongoose.model("follow",followSchema)