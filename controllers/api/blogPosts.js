const express = require("express");
const router = express.Router();
const {User, Blog, Comment} = require("../../models");
const withAuth = require('../../util/auth.js')


router.get("/", (req, res) => {
    Blog.findAll({include:[User, Comment]})
      .then(dbBlogs => {
        res.json(dbBlogs);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

 
router.get("/:id", (req, res) => {
    Blog.findByPk(req.params.id,{include:[User, Comment]})
      .then(dbBlog => {
        res.json(dbBlog);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
});


router.post("/", (req, res) => {
    if(!req.session.user){
      return res.status(401).json({msg:"Please login!"})
    }

    Blog.create({
      title:req.body.title,
      content:req.body.content,
      userId:req.session.user.id
    })
    
      .then(newBlog => {
        res.json(newBlog);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
});

 
router.put("/:id", (req, res) => {
  if(!req.session.user){
    return res.status(401).json({msg:"Please login!"})
  }
  Blog.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(updatedBlog => {
      res.json(updatedBlog);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

router.delete("/:id", (req, res) => {
  if(!req.session.user){
    return res.status(401).json({msg:"Please login!"})
  }
    Blog.destroy({
      where: {
        id: req.params.id
      }
    }).then(delBlog => {
      res.json(delBlog);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
  
module.exports = router;