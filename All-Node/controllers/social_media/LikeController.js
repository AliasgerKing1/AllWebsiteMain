// const routes = require("express").Router();
// const Like = require("../../models/social_media/Like");

// routes.post("/", (req, res)=> {
//    Like.create(req.body, (error)=> {
//         res.send({success : true});
//     })
// })
// routes.get("/", (req, res)=> {
//    Like.find({},(error, result)=> {
//         res.send(result);
//     })
// })
// routes.get("/:id", (req, res)=> {
//     let id = req.params.id;
//    Like.find({_id : id}, (error, result)=> {
//         res.send(result[0]);
//     })
// })

// routes.delete("/:id", (req, res)=> {
//     let id = req.params.id;
//     Like.deleteMany({_id : id}, (error)=> {
//          res.send({success : true});
//      })
//  })
// routes.put("/:id", (req, res)=> {
//     let id = req.params.id;
//     Like.updateMany({_id : id}, (error)=> {
//          res.send({success : true});
//      })
//  })

// module.exports = routes;