import express, { Application, Request, Response } from "express";
import authRouter from "./routes/auth.route";
import postRouter from "./routes/post.route";
import cors from "cors";

const app: Application = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

// TESTING
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong");
});

app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

// Server running
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
