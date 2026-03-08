import { Router } from "express";
import PostController from "../controllers/post.controller";
import AuthMiddleware from "../middlewares/auth.middleware";

const router = Router();

router.post("/create", AuthMiddleware.verifyToken, PostController.create);

export default router;
