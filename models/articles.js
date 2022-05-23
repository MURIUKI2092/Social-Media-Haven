const mongoose =require("mongoose");

const articleSchema = new mongoose.Schema({
  slug:{
    type:String,
   
  },
  title:{
    type:String,
  
  },
  description:{
    type:String,
    
  },
  body:{
    type:String
  },
  tagList:{
    type:Array
  },
  favorite:{
    type:Boolean
  },
  favoritesCount:{
    type:Number
  },
  author:{
    type:Object
  }

},{timestamps:true})
module.exports = mongoose.model("Article",articleSchema)