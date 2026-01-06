import { ZodSchema, ZodError } from "zod";
import { Request, Response, NextFunction } from "express";
import xss from "xss";

// Middleware factory to validate and sanitize input payloads.
// It uses Zod schemas with strict() so unexpected fields are rejected.
// Follows OWASP input validation guidance: https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html

export const validateBody = (schema: ZodSchema<unknown>) => (req: Request, res: Response, next: NextFunction) => {
  try {
    // Sanitize incoming strings to avoid XSS
    if (req.body && typeof req.body === "object") {
      Object.keys(req.body).forEach((k) => {
        const v = (req.body as Record<string, unknown>)[k];
        if (typeof v === "string") {
          // Basic HTML/JS stripping; for richer HTML allow-listing use a library like sanitize-html
          (req.body as Record<string, unknown>)[k] = xss(v);
        }
      });
    }

    // Parse/validate; schema should be .strict() to forbid extra fields
    const parsed = schema.parse(req.body);
    req.body = parsed as Record<string, unknown>; // overwrite with parsed & typed payload
    next();
  } catch (err) {
    // Return structured validation errors
    if (err instanceof ZodError) {
      return res.status(400).json({ error: "Invalid request body", details: err.errors });
    }
    return res.status(400).json({ error: "Invalid request body", details: String(err) });
  }
};
