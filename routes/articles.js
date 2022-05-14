const router = require("express").Router();
const Article = require("../models/articles");
const Comments = require("../models/comments")


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
//deleting an article using the slug name
router.delete("/:slug",async(req,res)=>{
  try{
    const articleToDelete = await Article.findOneAndDelete({slug:req.body.slug});
    res.status(200).json(` ${articleToDelete.title}  has been deleted successfully`)

  }catch(err){
    res.status(500).json(err);
  }
})
// The comment section
//adding a comment
router.post("/:slug/comments",async(req,res)=>{
  try{
    const newComment = await new Comments({
      comment:req.body.comment

    });
    const comment = await newComment.save();
    res.status(200).json(comment)
  }catch(err){
    req.status(500).json(err);
  }
})
// get comments from an article
router.get("/:slug/comments",async(req,res)=>{
  try{
    const allComments = await Comments.find();
    if(!allComments){
      res.status(200).json("There are no comments present")
    }
    res.status(200).json(allComments)
  }catch(err){
    res.status(500).json(err);
  }

})
//delete comment using an id

router.delete("/:slug/comments/:id",async(req,res)=>{
  try{
     const commentToDelete = await Comments.findByIdAndDelete(req.params.id);
     res.status(200).json("The comment has been deleted");

  }catch(err){
    res.status(500).json(err);
  }

})
module.exports=router;