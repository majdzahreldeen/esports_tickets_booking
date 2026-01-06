import dotenv from "dotenv";
dotenv.config();

import app from "./app";

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

if (!process.env.APP_API_KEY) {
  // Fail fast if required secrets are missing in dev environment
  console.error("Missing required env var: APP_API_KEY. See .env.example for required variables.");
  process.exit(1);
}

app.listen(PORT, () => {
  // Friendly startup message
  console.log(`Server running on http://localhost:${PORT}`);
});
