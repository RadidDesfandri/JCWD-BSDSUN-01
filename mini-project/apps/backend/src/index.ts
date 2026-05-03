import express, { Application, Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { formatZodIssues } from './middlewares/validate.middleware';
import cors from 'cors';
import ExampleRouter from './routes/example.route';
import AuthRouter from './routes/auth.route';

const app: Application = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());

app.get('/ping', (req: Request, res: Response) => {
  res.send('pong!');
});

// example routes
app.use('/api/example', ExampleRouter);
app.use('/api/auth', AuthRouter);

// Not Found Route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global Error Handler
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ZodError) {
    return res.status(422).json({
      message: 'Validation error',
      errors: formatZodIssues(err),
    });
  }

  const e = err as {
    stack?: string;
    status?: number;
    message?: string;
    errors?: unknown;
  };
  console.error(e.stack);
  res.status(e.status || 500).json({
    message: e.message || 'Internal Server Error',
    errors: e.errors || [],
  });
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(
      `✅ Server Api Running... \n ➜  [API] 🚀 Local: http://localhost:${String(PORT)}`
    );
  });
}

export default app;
