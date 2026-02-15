import express, { Request, Response } from "express";

// Menentukan port untuk server
const PORT = 8000;

// Membuat instance dari Express
const app = express();

// Endpoint untuk root path (_req digunakan untuk menandakan bahwa parameter tersebut tidak digunakan)
app.get("/", (_req: Request, res: Response) => {
  // Mengirimkan response dalam format JSON
  res.json({
    message: "Express API!",
  });
});

// Endpoint untuk ping-pong
app.get("/ping", (req: Request, res: Response) => {
  res.json("pong");
});

app.post("/login", () => {});
app.post("/register", () => {});

// Menjalankan server pada port yang ditentukan
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
