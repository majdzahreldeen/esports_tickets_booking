import express from "express";
import { z } from "zod";
import { validateBody } from "../middleware/validation";

export const exampleRouter = express.Router();

// POST /api/example/echo - validates input and echoes back sanitized payload
const echoSchema = z
  .object({
    name: z.string().min(1).max(100),
    email: z.string().email().max(254).optional(),
    message: z.string().max(2000).optional(),
  })
  .strict();

exampleRouter.post("/echo", validateBody(echoSchema), (req, res) => {
  // The body is typed and sanitized at this point
  res.json({ ok: true, data: req.body });
});

// GET /api/example/health - lightweight public endpoint
exampleRouter.get("/health", (_req, res) => {
  res.json({ status: "ok", timestamp: Date.now() });
});
