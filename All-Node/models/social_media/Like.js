require("../../config/database");
const mongoose = require("mongoose");

const Post = mongoose.Schema({
    reacted : String
})

module.exports = mongoose.model("post", Post);