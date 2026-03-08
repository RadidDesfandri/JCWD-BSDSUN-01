import { Router } from "express";
import PostController from "../controllers/post.controller";
import AuthMiddleware from "../middlewares/auth.middleware";

const router = Router();

router.post("/create", AuthMiddleware.verifyToken, PostController.create);

router.patch(
  "/update/:postId",
  AuthMiddleware.verifyToken,
  PostController.update,
);

router.delete(
  "/delete/:postId",
  AuthMiddleware.verifyToken,
  PostController.delete,
);

router.get("/all", PostController.all);
router.get("/user/:userId", PostController.getPostByUserId);

export default router;
