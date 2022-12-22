require("../../config/database");
const mongoose = require("mongoose");

const Fr = mongoose.Schema({
    senderId : String,
    reciverId : String,
    
})

module.exports = mongoose.model("friendRequest", Fr);