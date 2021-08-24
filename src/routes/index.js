import express from "express";
import AuthController from "../controllers/auth.controller/index.js";
import commentController from "../controllers/comment.controller/index.js";
import postController from "../controllers/post.controller/index.js";
import PostController from "../controllers/post.controller/index.js";
import UserController from "../controllers/user.controller/index.js";
import StripeController from "../controllers/stripe.controller/index.js";
import verify, { isLoggedIn } from "./auth.js";
import imageController from "../controllers/image.controller/index.js";

const Router = express.Router();

Router.get("/", (req, res) => res.send("Welcome!"));
Router.post("/login/", AuthController.login);
Router.get("/start-app/", AuthController.startApp);
Router.post("/register/", AuthController.register);
Router.get("/initiateBisoo/", isLoggedIn, PostController.initiateBisoo);

//auth routes
// Router.post("/upload",  imageController.uploadImage);
Router.get("/user/:id", verify, UserController.getUserById);
Router.get("/post/:userId?", verify, PostController.getAllPost);
Router.get("/post/:id", PostController.getPostById);
Router.post("/get-post-meta/", verify, PostController.getAllPostMeta);
Router.post("/update-post-meta/", verify, PostController.updatePostMeta);

Router.get(
  "/post-comment/:id",
  isLoggedIn,
  commentController.getCommentRelatedToPost
);
Router.post("/create-post/", isLoggedIn, postController.createPost);
Router.post("/create-payment-intent", verify, StripeController.paymentIntent);

//Follow unfollow users like, upvote, delete post, comment

export default Router;
