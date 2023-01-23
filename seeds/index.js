const sequelize = require("../config/connection")
const {User,Blog,Comment} = require("../models")

const users = [
    {
        username: "sue",
        password: "suepassword"
    },
    {
        username: "conor",
        password: "conorpassword"
    },
    {
        username: "charly",
        password: "charlypassword"
    },

]

const blogs = [
    {
        title: "My first post",
        content: "hi",
        userId: 1
    },
    {
        title: "My second post",
        content: "hello",
        userId: 1
    },
    {
        title: "Conor's first post",
        content: "Pokemon are awesome!",
        userId: 2
    },
    {
        title: "Charly's first post",
        content: "Nijisanji en rules!",
        userId: 3
    },
]

const comments = [
    {
        body: "amazing post!",
        blogId: 1,
        userId: 1
    },
    {
        body: "that's great!",
        blogId: 3,
        userId: 2
    },
    {
        body: "awesome!",
        blogId: 4,
        userId: 1
    },
    {
        body: "have a beautiful day!",
        blogId: 2,
        userId: 3
    },

]

const plantSeeds = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
        });
        await Blog.bulkCreate(blogs);
        await Comment.bulkCreate(comments);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

plantSeeds()
