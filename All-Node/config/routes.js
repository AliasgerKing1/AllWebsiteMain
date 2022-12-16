const routes = require("express").Router();

// Social media
routes.use("/api/user", require("../controllers/social_media/UserController"));
routes.use("/api/userprofile", require("../controllers/social_media/UserProfileController"));
routes.use("/api/post", require("../controllers/social_media/PostController"));


//job portal
routes.use("/api/employer",require("../controllers/job/EmployerController"));

module.exports = routes;