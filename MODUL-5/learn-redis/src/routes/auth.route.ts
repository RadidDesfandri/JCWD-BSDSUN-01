import { Router } from "express";
import * as authController from "../controllers/auth.controller";

const router = Router();

router.get("/:id", authController.profile);

export { router as authRouter };
