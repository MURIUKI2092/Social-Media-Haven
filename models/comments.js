const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  comment:{
    type:Object
  }
},{timestamps:true})

module.exports = mongoose.model("Comments",commentSchema)