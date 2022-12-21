const routes = require("express").Router();
const Image = require("../../models/social_media/ProfileImage");
const str = require("random-string");
const path = require("path");

routes.post("/", (req, res)=> {
    let body = JSON.parse(req.body.data); 
    let image = req.files.image;
    let random_string = str({length : 100});
    let original_name = image.name;
    let array = original_name.split(".");
    let extension = array[array.length - 1];
    let new_name = random_string + "." + extension;
    body.image = new_name;
    image.mv(path.resolve() + "/assets/profile_images/" + new_name, (error)=> {
        Image.create(body, (error)=> {
            res.send({success : true});
        })
    })
})
routes.get("/", (req, res)=> {
   Image.find({}, (error, result)=> {
        res.send(result);
    })
})
routes.get("/:id", (req, res)=> {
    let id = req.params.id;
   Image.find({_id : id}, (error, result)=> {
        res.send(result[0]);
    })
})

routes.delete("/:id", (req, res)=> {
    let id = req.params.id;
    Image.deleteMany({_id : id}, (error)=> {
         res.send({success : true});
     })
 })
routes.put("/:id", (req, res)=> {
    let id = req.params.id;
    Image.updateMany({_id : id}, (error)=> {
         res.send({success : true});
     })
 })

module.exports = routes;