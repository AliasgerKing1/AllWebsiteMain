require("../../config/database");
const mongoose = require("mongoose");

const PostJob = mongoose.Schema({
    title: String,
    category: String,
    comp_name: String,
    comp_email: String,
    comp_website: String,
    location: String,
    type: String,
    tags: String,
    salary: Number,
    experience: String,
    description: String,
})

module.exports = mongoose.model("postjob", PostJob);