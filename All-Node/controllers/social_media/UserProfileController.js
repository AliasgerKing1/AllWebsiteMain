const routes = require("express").Router();
const User = require("../../models/social_media/User");
const jwt = require("jsonwebtoken");
const sha1 = require("sha1");

routes.get("/", (req, res)=> {
    if(req.headers.authorization) {
        let token = JSON.parse(req.headers.authorization);
        let obj = jwt.decode(token, "Aliasger web");
        User.find({ _id: obj.id }, (error, result) => {
          res.send(result[0]);
        });
    }
})

routes.post("/update/password", (req,res)=> {
  if(req.headers.authorization) {
    let token = JSON.parse(req.headers.authorization);
    let obj = jwt.decode(token, "Aliasger web");
    User.find({ _id: obj.id }, (error, result) => {
      let user = result[0];
      if(user.password == sha1(req.body.old_pass)) {
        User.updateMany({_id : obj.id}, {password : sha1(req.body.new_pass)}, (error)=> {
          res.send({success : true});
        })
      }else {
        res.send({success : false});
      }
    });
  }
})

module.exports = routes;