require("../../config/database");
const mongoose = require("mongoose");

const Friend = mongoose.Schema({
    friend1 : String,
    friend2 : String,
    friend2 : String,
    friend1 : String,
    
})

module.exports = mongoose.model("friend", Friend);