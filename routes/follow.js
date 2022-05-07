const router = require("express").Router();
const follow = require("../models/follows")

// follows a given user
router.post("/",async(req,res)=>{
  try{
   const  userFollowed= new follow({
      email:req.body.email,
      username:req.body.username,
      bio:req.body.bio,
      image:req.body.image
    
    })
    const followed = await userFollowed.save();
    res.status(200).json(followed)


  }catch(err){
    res.status(200).json(err);
  }
});
// unfollow user using the id
// returns a successful unfollow message
router.delete("/:id",async(req,res)=>{
  try{
    userToUnfollow=await follow.findByIdAndDelete(req.params.id);
    res.status(200).json(`${userToUnfollow.username} has been unfollowed successfully`)

  }catch(err){
    res.status(500).json(err);
  }
})

//get all the followed individuals
//returns all followed individuals
router.get("/",async(req,res)=>{
  try{
    const allFollows =await follow.find();
    res.status(200).json(allFollows)

  }catch(err){
    res.status(500).json(err);
  }
})
module.exports=router