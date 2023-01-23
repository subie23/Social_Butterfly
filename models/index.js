const User = require("./User");
const Comment = require("./Comment");
const Post = require("./Post");

User.hasMany(Post);
Post.belongsTo(User);

Post.hasMany(Comment);
Comment.belongsTo(Post);

User.hasMany(Comment);
Comment.belongsTo(User);

module.exports = {
    User,
    Post,
    Comment
}