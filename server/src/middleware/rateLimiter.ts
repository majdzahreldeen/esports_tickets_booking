import rateLimit from "express-rate-limit";
import { Request } from "express";

// Sensible defaults: 100 requests per 15 minutes per IP; additionally
// respect user identity (when provided) by including user identifier in key.
// See OWASP recommendations for rate limiting and abuse mitigation:
// https://cheatsheetseries.owasp.org/cheatsheets/Denial_of_Service_Cheat_Sheet.html
// This is an example; adjust values to your threat model and traffic.

const generateKey = (req: Request) => {
  // Prefer authenticated user id (e.g., in Authorization header) if available
  // Fallback to IP address
  const auth = req.header("authorization");
  if (auth) {
    // Do not parse tokens here; use a small, fast hash to avoid leaking tokens to logs
    return `user:${auth}`; // in production, extract a sanitized user-id instead
  }
  return `ip:${req.ip}`;
};

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each key to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  keyGenerator: generateKey,
  handler: (req, res) => {
    // Graceful JSON 429 response following best practice
    res.setHeader("Retry-After", String(15 * 60));
    res.status(429).json({
      error: "Too many requests",
      message: "You have exceeded the request limit. Try again later.",
    });
  },
});

export default limiter;
