import { Request, Response, NextFunction } from "express";

// Centralized error handler
export const errorHandler = (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  // Silence unused var warning but keep function signature for Express
  void _next;

  // Log error safely
  if (err instanceof Error) {
    console.error(err.stack ?? err.message);
  } else {
    console.error(err);
  }

  // Extract status/message in a safe way without using `any`
  let status = 500;
  let message = "Internal Server Error";

  if (err && typeof err === "object") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const e = err as any;
    if (typeof e.status === "number") status = e.status;
    if (typeof e.message === "string") message = e.message;
  }

  res.status(status).json({ error: message });
};
