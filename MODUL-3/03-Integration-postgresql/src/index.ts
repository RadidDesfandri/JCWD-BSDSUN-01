import express, { Application, Request, Response } from "express";
import pool from "./config/db";

const app: Application = express();
const PORT = 8000;

app.use(express.json());

pool.connect((err: Error | undefined, client: any, release: () => void) => {
  if (err) {
    console.error("Error connection database:", err.stack);
    return;
  }

  console.log("Database connect...");
  release();
});

app.get("/actors", async (_req: Request, res: Response) => {
  try {
    const query = await pool.query(`SELECT * FROM actor`);

    res.status(200).json({
      message: "success",
      data: query.rows,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Something went wrong!",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
