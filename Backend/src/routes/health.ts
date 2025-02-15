import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    // Check DB connection
    await prisma.$queryRaw`SELECT 1`;

    res.json({
      status: "OK",
      database: "Connected",
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    const error = err as Error;

    res.status(500).json({
      status: "ERROR",
      database: "Disconnected",
      error: error.message,
    });
  }
});

export default router;
