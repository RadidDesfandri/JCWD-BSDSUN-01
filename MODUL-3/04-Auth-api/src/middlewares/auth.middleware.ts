import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../helpers/token";
import { TokenPayload } from "../types/user";

const AuthMiddleware = {
  verifyToken: async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      res.status(401).send({
        message: "Token tidak ditemukan ",
      });
    }

    try {
      const payload = verifyToken(token as string);

      req.user = payload as TokenPayload;

      next();
    } catch (error) {
      console.log(error);
      res.status(403).send({
        message: "Forbidden",
        error: error,
      });
    }
  },
};

export default AuthMiddleware;
