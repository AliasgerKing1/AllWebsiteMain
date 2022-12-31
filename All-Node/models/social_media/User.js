require("../../config/database");
const mongoose = require("mongoose");

const User = mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  password: String,
  contact: String,
  day: String,
  month: String,
  year: String,
  gender: String,
  code: String,
  terms: String,
  joined_date: String,
  senderId: String,
  otp : {type : Number, default : null},
});

module.exports = mongoose.model("user", User);