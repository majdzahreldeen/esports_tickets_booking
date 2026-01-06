import { z, ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";
import xss from "xss";

// Middleware factory to validate and sanitize input payloads.
// It uses Zod schemas with strict() so unexpected fields are rejected.
// Follows OWASP input validation guidance: https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html

export const validateBody = (schema: ZodSchema<any>) => (req: Request, res: Response, next: NextFunction) => {
  try {
    // Sanitize incoming strings to avoid XSS
    if (req.body && typeof req.body === "object") {
      Object.keys(req.body).forEach((k) => {
        const v = req.body[k];
        if (typeof v === "string") {
          // Basic HTML/JS stripping; for richer HTML allow-listing use a library like sanitize-html
          req.body[k] = xss(v);
        }
      });
    }

    // Parse/validate; schema should be .strict() to forbid extra fields
    const parsed = schema.parse(req.body);
    req.body = parsed; // overwrite with parsed & typed payload
    next();
  } catch (err) {
    // Return structured validation errors
    return res.status(400).json({ error: "Invalid request body", details: (err as any).errors || err.message });
  }
};
