import jwt from "jsonwebtoken";
import { TokenPayload } from "../types/user";
import { JWT_SECRET } from "../config/env";

const createToken = (payload: TokenPayload) => {
  return jwt.sign(payload, JWT_SECRET as string, {
    expiresIn: "1d",
  });
};

const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET as string);
};

export { createToken, verifyToken };
