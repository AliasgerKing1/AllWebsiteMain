const routes = require("express").Router();
const friendReq = require("../../models/social_media/FriendRequest");
const jwt = require("jsonwebtoken");

routes.get("/", (req, res) => {
  if (req.headers.authorization) {
    let token = JSON.parse(req.headers.authorization);
    let obj = jwt.decode(token, "Aliasger web");
  }
});

routes.post("/", (req, res) => {});

module.exports = routes;