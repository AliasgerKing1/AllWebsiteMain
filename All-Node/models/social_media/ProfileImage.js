require("../../config/database");
const mongoose = require("mongoose");

const Image = mongoose.Schema({
    userToken : String,
    image : String
})

module.exports = mongoose.model("image", Image);