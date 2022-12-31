const routes = require("express").Router();
const Upload = require("../../models/social_media/Upload");
const randstr = require("random-string");
const path = require("path");

routes.post("/", (req, res)=> {
    let body = JSON.parse(req.body.data);
    let image = req.files.image;
    randorm_string = randstr({length : 50 });
    let original_name = image.name;
    let arr = original_name.split(".");
    let ext = arr[arr.length-1];
    let new_name = randorm_string + "." + ext;
    body.image = new_name;
    image.mv(path.resolve() + "/assets/upload_images/" + new_name, (error)=> {
        Upload.create(body, (error)=> {
            let obj = {image : "http://localhost:3000/upload_images/" + new_name, title : body.title};
         res.send(obj);
     })
    })

})
routes.get("/", (req, res)=> {
   Upload.find({}, (error, result)=> {
    let new_result = result.map((x)=> {
        x.image = "http://localhost:3000/upload_images/" + x.image;
        return x;
    })
    res.send(new_result);
    })
})
routes.get("/:id", (req, res)=> {
    let id = req.params.id;
   Upload.find({_id : id}, (error, result)=> {
        res.send(result[0]);
    })
})

routes.delete("/:id", (req, res)=> {
    let id = req.params.id;
    Upload.deleteMany({_id : id}, (error)=> {
         res.send({success : true});
     })
 })
routes.put("/:id", (req, res)=> {
    let id = req.params.id;
    Upload.updateMany({_id : id}, (error)=> {
         res.send({success : true});
     })
 })

module.exports = routes;