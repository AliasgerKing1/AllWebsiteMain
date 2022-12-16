const routes = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

routes.get("/", (req, res)=> {
    if(req.headers.authorization) {
        let token = JSON.parse(req.headers.authorization);
        let obj = jwt.decode(token, "Aliasger web");
        User.find({ _id: obj.id }, (error, result) => {
          console.log(result);
          res.send(result[0]);
        });
    }
})

module.exports = routes;