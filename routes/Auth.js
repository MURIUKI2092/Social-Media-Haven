const  router =  require("express").Router();
const User = require("../models/users");
const bcrypt = require("bcrypt");


//registering a new user
router. post("/register",async(req,res)=>{

  try{
    const salt = await bcrypt.genSalt(15);
    const hashedPassword = await bcrypt.hash(req.body.password,salt);

    const newUser = new User ({
      email:req.body.email,
      password:hashedPassword,
      token: req.body.token,
      username:req.body.username,
      bio:req.body.bio,
      image:req.body.image

    });
    const user = await newUser.save()
    res.status(200).json(user)

  }catch(err){
    res.status(500).json(err);
  };

});


// login a user
router.post("/login",async(req,res)=>{
  try{
    const user = await User.findOne({
      email:req.body.email
    });
    !user && res.status(400).json("wrong Credentials!")
    const validate = await bcrypt.compare(req.body.password,user.password);
    !validate && res.status(400).json("Wrong Credentials!!");
    const {password, ...others} = user._doc
    res.status(200).json(others)
  }catch(err){
    res.status(500).json(err)
  }
})

module.exports = router