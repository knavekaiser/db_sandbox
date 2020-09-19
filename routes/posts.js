const router = require("express").Router();
let Post = require("../models/postModel");

router.route("/").get((req, res) => {
  console.log("this is ques");
  Post.find().then((posts) => res.json(posts));
});

router.route("/add").post((req, res) => {
  const ques = req.body.ques;
  const ans = req.body.ans;
  const newPost = new Post({ question: ques, answer: ans });
  newPost
    .save()
    .then(() => res.json("Post Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/mongo").get((req, res) => {
  Post.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/mongo").post((req, res) => {
  const newPost = new Post({
    question: req.body.ques,
    answer: req.body.ans,
  });
  newPost
    .save()
    .then(() => res.json("Post added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.json("Post Deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Post.findById(req.params.id).then((post) => {
    post.question = req.body.ques;
    post.answer = req.body.ans;

    post
      .save()
      .then(() => res.json("Updated!"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

module.exports = router;
