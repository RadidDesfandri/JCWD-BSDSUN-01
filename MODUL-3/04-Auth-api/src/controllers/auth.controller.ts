import { Request, Response } from "express";
import prisma from "../config/prisma";
import { compare, hash } from "bcrypt";
import transport from "../helpers/transporter";
import { createToken } from "../helpers/token";
import { GoogleAuth, OAuth2Client } from "google-auth-library";

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
      const user = await prisma.$transaction(async (tx) => {
        const alreadyExist = await tx.user.findUnique({
          where: { email },
        });

        if (alreadyExist) {
          res.status(400).send({
            message: "Email sudah tersedia, mohon ganti email anda",
            error: "Conflict",
          });
        }

        const lockPassword = await hash(password, 10);

        const user = await tx.user.create({
          data: { email, username, password: lockPassword },
          select: {
            id: true,
            email: true,
            username: true,
          },
        });

        await transport.sendMail({
          from: '"Enstagram" <enstagram@gmail.com>',
          to: user.email,
          subject: "Email Verification ✔",
          text: "Email Verification",
          html: "<b>Email Verification</b>",
        });

        return user;
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

      if (!alreadyExist?.emailVerifiedAt) {
        res.status(400).send({
          message: "Email belum di verifikasi",
          error: "CONFLICT",
        });
      }

      const match = await compare(password, alreadyExist?.password ?? "");

      if (!match) {
        res.status(400).send({
          message: "Password salah!",
          error: "Invalid credential",
        });
      }

      const token = createToken({
        id: alreadyExist?.id ?? 0,
        email: alreadyExist?.email ?? "",
      });

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
  me: async (req: Request, res: Response) => {
    try {
      const user = await prisma.user.findUnique({
        where: { id: req.user?.id },
        omit: {
          password: true,
        },
      });

      res.json({
        message: "success user data",
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

  googleLogin: async (req: Request, res: Response) => {
    const { idToken } = req.body;

    if (!idToken) {
      res.status(422).send({
        message: "ID Token wajib diisi",
        error: "Error validation",
      });
    }

    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID ?? "");

    try {
      const ticket = await client.verifyIdToken({
        idToken,
        audience: process.env.GOOGLE_CLIENT_ID ?? "",
      });

      const payload = ticket.getPayload();

      console.log("payload", payload);

      if (!payload) {
        res.status(400).send({
          message: "Invalid ID Token",
          error: "Invalid credential",
        });
        return;
      }

      let user = await prisma.user.findUnique({
        where: { email: payload?.email },
      });

      if (!user) {
        user = await prisma.user.create({
          data: {
            email: payload?.email ?? "",
            username: payload?.name ?? "",
            password: "",
            emailVerifiedAt: new Date(),
          },
        });
      }

      const token = createToken({
        id: user.id,
        email: user.email,
      });

      res.json({
        message: "success google login",
        data: {
          id: user.id,
          email: user.email,
          username: user.username,
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
