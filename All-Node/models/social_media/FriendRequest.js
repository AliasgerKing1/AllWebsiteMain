require("../../config/database");
const mongoose = require("mongoose");

const Fr = mongoose.Schema({
    senderId : {},
    reciverId : String,
    
})

module.exports = mongoose.model("friendRequest", Fr);