const routes = require("express").Router();
const User = require("../../models/social_media/User");
const rn = require("random-number");
const sha1  = require("sha1");
routes.post("/", (req,res)=> {
    let username = req.body.username;
    User.find({email : username}, (error, result)=> {
        if(result.length == 0) {
            res.send({success : false});
        } else  {
            let num = rn.generator({
                min : 1000,
                max : 9999,
                integer : true
            })
            let otp = num();

            User.updateMany({email : username}, {otp : otp}, (error)=> {
                res.send({success : true});
            })
        }
    })
})

routes.post("/check/otp", (req,res)=> {
    let username = req.body.username;
    let otp = req.body.otp;
    User.find({$and : [{email : username}, {otp : otp}]}, (error, result)=> {
        if(result.length == 0) {
            res.send({success : false});
        }else {
            res.send({success : true});
        }
    })
})

routes.post("/new/password", (req,res)=> {
    let username = req.body.username;
    let newPassword = req.body.newPass;
    User.updateMany({email : username}, {password : sha1(newPassword) }, (error)=> {
        res.send({success : true});
    })
})

module.exports = routes;