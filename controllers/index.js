const express = require('express');
const router = express.Router();

const userRoutes = require("./api/users.js");
router.use("/api/users",userRoutes)

const blogRoutes = require("./api/blogPosts");
router.use("/api/blogs",blogRoutes)

const commentRoutes = require("./api/comments");
router.use("/api/comments",commentRoutes)

const frontEnd = require("./frontRoutes");
router.use("/",frontEnd)

router.get("/showsessions",(req,res)=>{
    res.json(req.session)
})

module.exports = router;