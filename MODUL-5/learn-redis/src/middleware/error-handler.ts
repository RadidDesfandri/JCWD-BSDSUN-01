import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/app-error";
import logger from "../utils/logger";

/* 
{
  "message": "", // string
  "statusCode": 200, // number
  "data": { // object | null
    "source": "cache",
    "data": 
  } | null,
  "errors": [] | null, // array of error messages or null
}
*/
const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  logger.error(`Error: ${err.name} ${err.message}`, { stack: err.stack });

  if (err.stack) console.error(err.stack);

  if (err instanceof AppError) {
    return res.status(err.statusCode).send({
      message: err.message,
      statusCode: err.statusCode,
      data: null,
      errors: err.message ? [err.message] : "Unknown error",
    });
  }

  return res.status(500).send({
    message: "Internal Server Error",
    statusCode: 500,
    data: null,
    errors: err.message ? [err.message] : "Unknown error",
  });
};

export { errorHandler };
