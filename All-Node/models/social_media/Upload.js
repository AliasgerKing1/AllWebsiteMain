require("../../config/database");
const mongoose = require("mongoose");

const File = mongoose.Schema({
  title : String,
  image: String,
});

module.exports = mongoose.model("file", File);