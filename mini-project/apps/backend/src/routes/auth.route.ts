import { Router } from 'express';
import AuthController from '../controllers/auth.controller';
import { validate } from '../middlewares/validate.middleware';
import AuthValidator from '../validators/auth.validator';

const AuthRouter = Router();

AuthRouter.post('/login', validate(AuthValidator.login), AuthController.login);

AuthRouter.post(
  '/register',
  validate(AuthValidator.register),
  AuthController.register
);
// ExampleRouter.get(
//   '/',
//   ExampleMiddleware.exampleMiddleware,
//   ExampleController.getExample
// );

export default AuthRouter;
