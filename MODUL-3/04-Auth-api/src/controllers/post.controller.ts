import { Request, Response } from "express";

const PostController = {
  create: async (req: Request, res: Response) => {
    try {
      res.json({
        message: "create post",
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
