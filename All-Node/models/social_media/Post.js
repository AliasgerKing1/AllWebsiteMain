require("../../config/database");
const mongoose = require("mongoose");

const Post = mongoose.Schema({
    statusinput : String,
    time : String
})

module.exports = mongoose.model("post", Post);