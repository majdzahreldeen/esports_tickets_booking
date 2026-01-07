import { Request, Response, NextFunction } from "express";

// Simple API key middleware. Expect a header `x-api-key: <key>`.
// In production, prefer short-lived tokens and use a dedicated auth service.
export const requireApiKey = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.header("x-api-key");
  const envKey = process.env.APP_API_KEY;
  if (!envKey) {
    // Fail safe: do not allow protected endpoints if server misconfigured
    return res.status(500).json({ error: "Server misconfiguration: missing APP_API_KEY" });
  }
  if (!apiKey || apiKey !== envKey) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  return next();
};