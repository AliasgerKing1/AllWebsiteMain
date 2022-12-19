require("../../config/database");
const mongoose = require("mongoose");

const Codes = mongoose.Schema({
  name: String,
  dial_code: String,
  code: String,
});

module.exports = mongoose.model("code", Codes);
