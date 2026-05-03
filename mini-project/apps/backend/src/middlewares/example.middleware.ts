import { NextFunction, Request, Response } from 'express';

const ExampleMiddleware = {
  exampleMiddleware: (req: Request, res: Response, next: NextFunction) => {
    console.info('Example Middleware...');
    next();
  },
};

export default ExampleMiddleware;
