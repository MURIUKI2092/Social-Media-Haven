const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  comment:{
    type:Object
  }
})

module.exports = mongoose.model("Comments",commentSchema)