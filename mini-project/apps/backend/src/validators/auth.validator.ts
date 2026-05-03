import * as z from 'zod';

const AuthValidator = {
  login: z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters' })
      .max(10, { message: 'Password must be less than 10 characters' }),
  }),
  register: z.object({
    name: z.string().min(3).max(255),
    email: z.string().email(),
    password: z.string().min(6).max(255),
  }),
};

export default AuthValidator;
