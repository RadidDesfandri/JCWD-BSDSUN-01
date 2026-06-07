import "dotenv/config";
import express, { Request, Response } from "express";
import { AUTH_KEY_REDIS } from "./cache/cache-db-key";
import { redis } from "./cache/redisClient";
import { errorHandler } from "./middleware/error-handler";
import { authRouter } from "./routes/auth.route";

const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.use("/auth", authRouter);

async function getDataFromDatabase() {
  console.log("Simulating database call...");

  return { message: "Data from database", timestamp: new Date().toISOString() };
}

app.get("/data", async (req: Request, res: Response) => {
  const cachedData = await redis.get(AUTH_KEY_REDIS.USER(1)); // Using userId = 1 for demonstration

  if (cachedData) {
    console.log("Cache hit!");
    return res.json({ source: "cache", data: JSON.parse(cachedData) });
  }

  const data = await getDataFromDatabase();
  await redis.set(AUTH_KEY_REDIS.USER(1), JSON.stringify(data), "EX", 10); // Cache for 10 seconds

  res.json({ source: "database", data });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
