const router = require("express").Router();
const User = require("../models/users");

// get all users
router.get("/",async(req,res)=>{
  try{
    const users = await User.find();
        res.status(200).json(others);
  }catch(err){
    res.status(500).json(err)
  }
});

// get a user using an id
router.get("/:id",async(req,res)=>{
  try{
    const user = await User.findById(req.params.id);
    //destructure the user so as to obtain a user without password
    // mainly for security
    const {password, ...others}= user._doc;
    res.status(200).json(others);
  }catch(err){
    res.status(500).json(err)
  }
})
// update a user
// update the details of the user

router.put("/update/:id",async(req,res)=>{
  try{
    const user = await User.findByIdAndUpdate(req.params.id,{
      $set:req.body
    },{new:true}
    );
    res.status(200).json(user)
  }catch(err){
    res.status(500).json(err)
  }
})

router.delete("/delete/:id",async(req,res)=>{
  try{
    deleteUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(`${deleteUser.username} has been deleted successfully!`)
  }catch(err){
    res.status(500).json(err);
  }
})
module.exports = router