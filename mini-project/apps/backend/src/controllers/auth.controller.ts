import { Request, Response } from 'express';
import AuthService from '../services/auth.service';

const AuthController = {
  login: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body as {
        email: string;
        password: string;
      };

      const result = await AuthService.login(email, password);

      res.status(200).json({
        message: 'Login Success',
        data: result,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Internal server error',
        errors: error,
      });
    }
  },
  register: async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body as {
        name: string;
        email: string;
        password: string;
      };
    } catch (error) {
      return res.status(500).json({
        message: 'Internal server error',
        errors: error,
      });
    }
  },
};

export default AuthController;
