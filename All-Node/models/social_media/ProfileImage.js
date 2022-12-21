require("../../config/database");
const mongoose = require("mongoose");

const Image = mongoose.Schema({
    name : String,
    image : String
})

module.exports = mongoose.model("image", Image);