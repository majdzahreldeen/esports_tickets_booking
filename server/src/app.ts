import express from "express";
import helmet from "helmet";
import cors from "cors";
import "express-async-errors"; // patch to handle async errors centrally

import rateLimiter from "./middleware/rateLimiter";
import { exampleRouter } from "./routes/example";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

// Basic security headers
app.use(helmet());

// JSON parsing with size limit to avoid large payloads
app.use(express.json({ limit: "10kb" }));

// CORS - in production set a strict origin whitelist
app.use(cors({ origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(",") : true }));

// Centralized rate limiting middleware (applies to all public endpoints)
app.use(rateLimiter);

// Example namespaced API route
app.use("/api/example", exampleRouter);

// Error handling middleware should be last
app.use(errorHandler);

export default app;
