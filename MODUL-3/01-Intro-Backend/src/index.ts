import express, { NextFunction, Request, Response } from "express";

// Menentukan port untuk server
const PORT = 8000;

// Membuat instance dari Express
const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("Middleware 1");

  next(); // Melanjutkan ke middleware berikutnya
}); // Middleware untuk parsing JSON pada request body

// Endpoint untuk root path (_req digunakan untuk menandakan bahwa parameter tersebut tidak digunakan)
app.get("/", (_req: Request, res: Response) => {
  // Mengirimkan response dalam format JSON
  res.json({
    message: "Express API!",
  });
});

// Endpoint untuk ping-pong
app.get("/ping", (req: Request, res: Response) => {
  console.log("Running /ping api");

  res.json("pong");
});

function loginController(req: Request, res: Response) {
  res.json({
    message: "Login API",
  });
}

app.use("/auth", (req: Request, res: Response, next: NextFunction) => {
  console.log("Middleware untuk /auth");
  // next();

  app.post("/login", loginController);
  app.post("/register", () => {});
});

app.get(
  "/products/:productId/users/:userId",
  (req: Request, res: Response, next: NextFunction) => {
    const { productId, userId } = req.params; // Mengambil parameter dari URL dengan destructuring
    // const userId = req.params.userId; // Mengambil parameter userId dari URL
    // const productId = req.params.productId; // Mengambil parameter productId dari URL

    if (!productId || !userId) {
      return next(new Error("Product ID and User ID are required"));
    }

    res.json({
      message: `Product ID: ${productId}, User ID: ${userId}`,
    });
  },
);

app.get("/api/events", (req: Request, res: Response) => {
  const { page, limit, search } = req.query; // Mengambil query parameters dari URL
  // ?page=1&limit=10&search=example

  res.json({
    message: "Events API",
    page,
    limit,
    search,
  });

  // app.post("/store", (req: Request, res: Response) => {
  //   res.json({
  //     message: "Events API",
  //   });
  // });

  // app.delete("/delete", (req: Request, res: Response) => {
  //   res.json({
  //     message: "Events API",
  //   });
  // });
});

// Menjalankan server pada port yang ditentukan
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
