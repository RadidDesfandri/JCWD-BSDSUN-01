import { Prisma, PrismaClient } from "@prisma/client";
import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT = 8000;

app.use(express.json());

const prisma = new PrismaClient();

// TESTING
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong");
});

app.get("/branches/:branchId", async (req: Request, res: Response) => {
  try {
    const branchId = req.params.branchId;

    const data = await prisma.branch.findUnique({
      where: { id: Number(branchId) },
      select: {
        id: true,
        name: true,
        location: true,
      },
    });

    res.json({
      message: "success",
      data: data,
    });
  } catch (error) {
    console.error(error);
    res.json({
      message: "ERROR!",
      error: error,
    });
  }
});

// GET ALL BRANCH DATA
app.get("/branches", async (req: Request, res: Response) => {
  try {
    const { name, search, orderBy = "asc" } = req.query;

    const where: Prisma.BranchWhereInput = {};

    if (name) {
      where.name = name as string;
    }

    if (search) {
      where.OR = [
        {
          name: {
            contains: search as string,
            mode: "insensitive",
          },
        },
        {
          location: {
            contains: search as string,
            mode: "insensitive",
          },
        },
      ];
    }

    await prisma.$transaction(async (tx) => {
      // tx.branch.create
      // tx.branch.update
      // tx.manager.create
    });

    const data = await prisma.branch.findMany({
      where,
      include: {
        manager: true,
      },
      // skip: 1,
      // take: 2,
      orderBy: { createdAt: orderBy as "asc" | "desc" },
    });

    const aggregation = await prisma.branch.aggregate({
      _count: true,
    });

    res.json({
      message: "success",
      aggregation,
      data,
    });
  } catch (error) {
    console.error(error);
    res.json({
      message: "ERROR!",
      error: error,
    });
  }
});

// CREATE NEW DATA BRANCH
app.post("/branches/create", async (req: Request, res: Response) => {
  try {
    const { name, location } = req.body;

    const data = await prisma.branch.create({
      data: {
        name,
        location,
      },
    });

    res.json({
      message: "success",
      data,
    });
  } catch (error) {
    console.error(error);
    res.json({
      message: "ERROR!",
      error: error,
    });
  }
});

// UPDATE
app.put("/branches/update/:branchId", async (req: Request, res: Response) => {
  try {
    const { name, location } = req.body;
    const branchId = req.params.branchId;

    const data = await prisma.branch.update({
      where: { id: Number(branchId) },
      data: {
        name,
        location,
      },
    });

    res.json({
      message: "success",
      data,
    });
  } catch (error) {
    console.error(error);
    res.json({
      message: "ERROR!",
      error: error,
    });
  }
});

app.delete(
  "/branches/delete/:branchId",
  async (req: Request, res: Response) => {
    try {
      const branchId = req.params.branchId;

      await prisma.branch.delete({
        where: { id: Number(branchId) },
      });

      res.json({
        message: "success",
      });
    } catch (error) {
      console.error(error);
      res.json({
        message: "ERROR!",
        error: error,
      });
    }
  },
);

// Server running
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
