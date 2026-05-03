import { Request, Response } from "express";
import prisma from "../config/prisma";

const PostController = {
  create: async (req: Request, res: Response) => {
    const { text } = req.body;

    if (!text) {
      res.status(400).send({
        message: "Text wajib diisi!",
      });
    }

    try {
      const post = await prisma.post.create({
        data: {
          text,
          userId: req.user?.id,
        },
      });

      res.json({
        message: "create post",
        data: post,
      });
    } catch (error) {
      res.json({
        message: "error",
        error,
      });
    }
  },
  update: async (req: Request, res: Response) => {
    const { text } = req.body;
    const { postId } = req.params;

    if (!text) {
      res.status(400).send({
        message: "Text wajib diisi!",
      });
    }

    try {
      // Periksa apakah postnya ada didatabase -> cari berdasarkan postId
      const post = await prisma.post.findUnique({
        where: {
          id: Number(postId),
        },
      });

      if (!post) {
        return res.status(404).send({
          message: "Post tidak ditemukan",
        });
      }

      // Periksa apakah postnya milik user yang sedang login -> cari berdasarkan userId
      if (post?.userId !== req.user?.id) {
        return res.status(403).send({
          message: "Forbidden",
        });
      }

      const updatedPost = await prisma.post.update({
        where: {
          id: Number(postId),
        },
        data: {
          text,
        },
      });

      res.json({
        message: "update post",
        data: updatedPost,
      });
    } catch (error) {
      res.json({
        message: "error",
        error,
      });
    }
  },
  delete: async (req: Request, res: Response) => {
    const { postId } = req.params;

    try {
      const post = await prisma.post.findUnique({
        where: {
          id: Number(postId),
        },
      });

      if (!post) {
        return res.status(404).send({
          message: "Post tidak ditemukan",
        });
      }

      if (post?.userId !== req.user?.id) {
        return res.status(403).send({
          message: "Forbidden",
        });
      }

      await prisma.post.delete({
        where: {
          id: Number(postId),
        },
      });

      res.json({
        message: "delete post",
      });
    } catch (error) {
      res.json({
        message: "error",
        error,
      });
    }
  },
  all: async (req: Request, res: Response) => {
    try {
      const posts = await prisma.post.findMany({
        include: {
          user: {
            select: {
              id: true,
              username: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      res.json({
        message: "all post",
        data: posts,
      });
    } catch (error) {
      res.json({
        message: "error",
        error,
      });
    }
  },
  getPostByUserId: async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;

      const user = await prisma.user.findUnique({
        where: {
          id: Number(userId),
        },
      });

      if (!user) {
        return res.status(404).send({
          message: "User tidak ditemukan",
        });
      }

      const posts = await prisma.post.findMany({
        where: {
          userId: Number(userId),
        },
        include: {
          user: {
            select: {
              id: true,
              username: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      res.json({
        message: "all post user",
        data: posts,
      });
    } catch (error) {
      res.json({
        message: "error",
        error,
      });
    }
  },
};

export default PostController;
