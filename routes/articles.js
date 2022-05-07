const router = require("express").Router();
const Article = require("../models/articles");


// publish an  article
router.post("/",async(req,res)=>{
  try{
    const newArticle = await new Article({
      slug:req.body.slug,
      title:req.body.title,
      description:req.body.description,
      body:req.body.body,
      tagList:req.body.tagList,
      favorite:req.body.favorite,
      favoritesCount:req.body.favoritesCount,
      author: req.body.author
      
      
    });
    const article =  await newArticle.save();
    res.status(200).json(article)

  }catch(err){
    res.status(500).json(err)

  }
});

//get all articles
router.get("/",async(req,res)=>{
  try{
    const allArticles = await Article.find();
    res.status(200).json(allArticles)


  }catch(err){
    res.status(500).json(err)
  }
})
//update articles
router.put("/:slug",async(req,res)=>{
  try{
    const articleToUpdate = await Article.findOneAndUpdate({slug:req.body.slug},{
      $set:req.body
    },{new:true}
    );
    res.status(200).json(articleToUpdate)

  }catch(err){
    res.status(500).json(err)
  }
})

router.delete("/:slug",async(req,res)=>{
  try{
    const articleToDelete = await Article.findOneAndDelete({slug:req.body.slug});
    res.status(200).json(` ${articleToDelete.title}  has been deleted successfully`)

  }catch(err){
    res.status(500).json(err);
  }
})
module.exports=router;