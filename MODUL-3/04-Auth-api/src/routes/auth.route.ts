import { Router } from "express";
import AuthController from "../controllers/auth.controller";
import AuthMiddleware from "../middlewares/auth.middleware";

const router = Router();

router.post("/login", AuthController.login);
router.post("/google-login", AuthController.googleLogin);
router.post("/register", AuthController.register);
router.get("/me", AuthMiddleware.verifyToken, AuthController.me);

export default router;
