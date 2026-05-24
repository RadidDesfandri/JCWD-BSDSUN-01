import "dotenv/config";
import express, { Request, Response } from "express";
import * as z from "zod";
import multer from "multer";
import { uploadImage } from "./helpers/cloudinary";
import { sendMail } from "./helpers/send-mail";

const app = express();
const PORT = 8000;

app.use(express.json());
const upload = multer({ dest: "uploads/" });

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

const fileValidation = z.object({
  file: z.object({
    originalname: z.string(),
    size: z.number().max(1 * 1024 * 1024, "File size cannot exceed 1MB"),
    mimetype: z.string().refine((type) => type.startsWith("image/"), {
      message: "Only image files are allowed",
    }),
  }),
});

app.post(
  "/upload",
  upload.single("file"),
  async (req: Request, res: Response) => {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const validate = fileValidation.safeParse({ file: req.file });

    if (validate.error) {
      return res.status(422).json({
        message: "Validation error",
        errors: validate.error.flatten().fieldErrors,
      });
    }

    const imageUrl = await uploadImage(req.file!.path);

    res.json({ message: "File uploaded successfully", data: imageUrl });
  },
);

const addressSchema = z.object({
  city: z.string(),
  zip: z.string(),
});

const loginSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email(),
  address: addressSchema.optional(),
});

app.post("/login", (req: Request, res: Response) => {
  const validate = loginSchema.safeParse(req.body);

  if (validate.error) {
    return res.status(422).json({
      message: "Validation error",
      errors: validate.error.flatten().fieldErrors,
    });
  }

  res.json({ message: "Login successful", data: validate.data });
});

app.post("/send-email", async (req: Request, res: Response) => {
  try {
    const validate = loginSchema.safeParse(req.body);

    if (validate.error) {
      return res.status(422).json({
        message: "Validation error",
        errors: validate.error.flatten().fieldErrors,
      });
    }

    const { name, email } = validate.data;

    await sendMail(
      [email],
      "Welcome!",
      `Hello ${name}, welcome to our service!`,
    );

    res.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
