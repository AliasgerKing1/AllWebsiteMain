const routes = require("express").Router();
const Code = require("../../models/social_media/cont-code");

routes.post("/", (req, res) => {
  Code.create(req.body, (error) => {
    res.send({ success: true });
  });
});
routes.get("/", (req, res) => {
  Code.find({})
    .sort({ dial_code: -1 })
    .exec((error, result) => {
      res.send(result);
    });
});
routes.get("/:id", (req, res) => {
  let id = req.params.id;
  Code.find({ _id: id }, (error, result) => {
    res.send(result);
  });
});

routes.delete("/:id", (req, res) => {
  let id = req.params.id;
  Code.deleteMany({ _id: id }, (error) => {
    res.send({ success: true });
  });
});
routes.put("/:id", (req, res) => {
  let id = req.params.id;
  Code.updateMany({ _id: id }, (error) => {
    res.send({ success: true });
  });
});

module.exports = routes;
