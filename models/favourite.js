const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema({
  article:{
    type:Object
  }
},{timestamps:true})

module.exports = mongoose.model("Favorite",favoriteSchema);