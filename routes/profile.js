const router = require("express").Router();
const User = require("../models/users")


//get a single user profile
router.get("/:username",async(req,res)=>{
  try{
    const userProfile = await User.findOne({username:req.params.username});
    // destructure  to obtain what is required 
    const {password,...others}=userProfile._doc;
    res.status(200).json(others);
  }catch(err){
    res.status(500).json(err);
  }
})
module.exports = router;