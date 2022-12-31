const routes = require("express").Router();

// Social media
routes.use("/api/user", require("../controllers/social_media/UserController"));
routes.use("/api/userprofile", require("../controllers/social_media/UserProfileController"));
routes.use("/api/post", require("../controllers/social_media/PostController"));
routes.use("/api/city", require("../controllers/social_media/CityController"));
// routes.use("/api/like", require("../controllers/social_media/LikeController"));
routes.use("/api/profile/image", require("../controllers/social_media/ProfileImageController"));
routes.use("/api/friend/request", require("../controllers/social_media/FriendRequestController"));
routes.use("/api/friend", require("../controllers/social_media/FriendController"));
routes.use("/api/upload", require("../controllers/social_media/UploadController"));
routes.use("/api/forget/password", require("../controllers/social_media/ForgetPasswordController"));
routes.use(
  "/api/code",
  require("../controllers/social_media/ContCodeController")
);


//job portal
routes.use("/api/recruiter/job/post", require("../controllers/job/PostJobController"));


module.exports = routes;