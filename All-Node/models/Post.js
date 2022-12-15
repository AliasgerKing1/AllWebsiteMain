const mongoose = require("mongoose");

const Post = mongoose.Schema({
    statusinput : String
})

module.exports = mongoose.model("post", Post);