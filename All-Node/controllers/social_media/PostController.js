const routes = require("express").Router();
const Post = require("../../models/social_media/Post");

routes.post("/", (req, res)=> {
   Post.create(req.body, (error)=> {
        res.send({success : true});
    })
})
routes.get("/", (req, res)=> {
   Post.find({}).limit(6).exec((error, result)=> {
        res.send(result);
    })
})
routes.get("/:id", (req, res)=> {
    let id = req.params.id;
   Post.find({_id : id}, (error, result)=> {
        res.send(result[0]);
    })
})

routes.delete("/:id", (req, res)=> {
    let id = req.params.id;
    Post.deleteMany({_id : id}, (error)=> {
         res.send({success : true});
     })
 })
routes.put("/:id", (req, res)=> {
    let id = req.params.id;
    Post.updateMany({_id : id}, (error)=> {
         res.send({success : true});
     })
 })

module.exports = routes;