const routes = require("express").Router();

routes.use("/api/user", require("../controllers/UserController"));
routes.use("/api/userprofile", require("../controllers/UserProfileController"));
routes.use("/api/post", require("../controllers/PostController"));

module.exports = routes;