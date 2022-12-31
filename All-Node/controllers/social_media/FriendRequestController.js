const routes = require("express").Router();
const friendReq = require("../../models/social_media/FriendRequest");
const jwt = require("jsonwebtoken");

routes.get("/", (req, res) => {
 
});

routes.post("/", (req, res) => {
  if (req.headers.authorization) {
    let token = JSON.parse(req.headers.authorization);
    let obj = jwt.decode(token, "Aliasger web");
    req.body.senderId = obj;
    friendReq.create(req.body, (error) => {
      res.send({ success: true });
    });
  }
});

routes.delete("/:id", (req, res) => {
  let id = req.params.id;
  friendReq.deleteMany({ _id: id }, (error) => {
    res.send({ success: true });
  });
});
routes.get("/:id", (req, res) => {
  let id = req.params.id;
  friendReq.find({ _id: id }, (error, result) => {
    console.log(result);
    return;
    res.send(result);
  });
});

module.exports = routes;