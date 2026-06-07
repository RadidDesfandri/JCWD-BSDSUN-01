import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/app-error";
import logger from "../utils/logger";

const profile = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    if (id !== "1") {
      throw new AppError(`User with id ${id} not found`, 404);
    }

    logger.info(`User with id ${id} accessed their profile`);

    res.json({ source: "database", data: { userId: id, name: `User ${id}` } });
  } catch (error) {
    next(error);
  }
};

export { profile };
