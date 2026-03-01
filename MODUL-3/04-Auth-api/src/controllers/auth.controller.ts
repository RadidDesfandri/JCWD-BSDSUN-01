import { Request, Response } from "express";
import prisma from "../config/prisma";
import { compare, hash } from "bcrypt";

// 1. Periksa apakah email yang dimasukkan user sudah tersedia atau belum
// 2. Kalau tersedia akan throw error 400
// 3. Kalau tidak akan melanjutkan membuat data user
const AuthController = {
  register: async (req: Request, res: Response) => {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      res.status(422).send({
        message: "Email, Username, dan Password wajib diisi",
        error: "Error validation",
      });
    }

    try {
      const alreadyExist = await prisma.user.findUnique({
        where: { email },
      });

      if (alreadyExist) {
        res.status(400).send({
          message: "Email sudah tersedia, mohon ganti email anda",
          error: "Conflict",
        });
      }

      const lockPassword = await hash(password, 10);

      const user = await prisma.user.create({
        data: { email, username, password: lockPassword },
        select: {
          id: true,
          email: true,
          username: true,
        },
      });

      res.json({
        message: "success register",
        data: user,
      });
    } catch (error) {
      console.error(error);
      res.json({
        message: "ERROR!",
        error: error,
      });
    }
  },
  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(422).send({
        message: "Email, dan Password wajib diisi",
        error: "Error validation",
      });
    }

    try {
      const alreadyExist = await prisma.user.findUnique({
        where: { email },
      });

      if (!alreadyExist) {
        res.status(404).send({
          message: "Email belum belum terdaftar, mohon register!",
          error: "NotFound",
        });
      }

      const match = await compare(password, alreadyExist?.password ?? "");

      if (!match) {
        res.status(400).send({
          message: "Password salah!",
          error: "Invalid credential",
        });
      }

      const token = "token_" + crypto.randomUUID();

      res.json({
        message: "success register",
        data: {
          id: alreadyExist?.id,
          email: alreadyExist?.email,
          username: alreadyExist?.username,
        },
        token,
      });
    } catch (error) {
      console.error(error);
      res.json({
        message: "ERROR!",
        error: error,
      });
    }
  },
};

export default AuthController;
