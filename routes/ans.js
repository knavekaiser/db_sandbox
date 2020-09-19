const router= require("express").Router();

router.route("/").get((req,res)=>{
  Post.find().then(posts=>res.json(posts)).catch(err => res.status(400).json("Error: "+err))
})

router.route("/add").post((req,res)=>{
  const ques = req.body.ques
  const ans = req.body.ans
  const newPost = new Post({question: ques, answer: ans});
  newPost.save().then(()=>res.json("Post Added!")).catch(err => res.status(400).json("Error: "+err)})
})

module.exports = router
