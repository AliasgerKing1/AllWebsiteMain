const routes = require("express").Router();
const City = require("../../models/social_media/City");

routes.get("/", (req,res)=> {
    City.find({}, (error , result)=> {
        res.send(result);
        })
})

routes.get("/totalCity", (req,res)=> {
    City.count((error,result)=> {
        res.send({total : result});
    })
})
routes.get("/pagination/:a/:b", (req,res)=> {
    let total = req.params.a;
    let skip = req.params.b;
    if(skip != 0 ) {
        skip = (skip-1)*total;
    }
        City.find().skip(skip).limit(total).exec((error,result)=> {
        res.send(result);
    })
})


module.exports = routes;