import { Router } from 'express';
import ExampleController from '../controllers/example.controller';
import ExampleMiddleware from '../middlewares/example.middleware';

const ExampleRouter = Router();

ExampleRouter.get(
  '/',
  ExampleMiddleware.exampleMiddleware,
  ExampleController.getExample
);

export default ExampleRouter;
