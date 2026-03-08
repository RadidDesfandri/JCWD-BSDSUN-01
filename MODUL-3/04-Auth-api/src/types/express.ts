import { JwtPayload } from "jsonwebtoken";
import { TokenPayload } from "./user";

declare global {
  namespace Express {
    interface Request {
      user?: TokenPayload | JwtPayload;
    }
  }
}
