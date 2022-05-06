 const mongoose = require("mongoose");
 
const  userSchema = new mongoose.Schema({

    email:{
      type: String,
      // required:true
    },
    password:{
      type:String
    },
    token:{
      type:String,
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

module.exports = mongoose.model("User",userSchema);