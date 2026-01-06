# esports_tickets_booking

## Overview

This repository is a Vite + React TypeScript frontend for an esports ticket/booking site.

## Security hardening added

I added a lightweight Node/Express security scaffold (in `/server`) that follows OWASP recommendations and implements the requested features:

- ✅ **Rate limiting** on all public endpoints (IP + user-aware keying). Sensible defaults (100 requests / 15 minutes) and graceful 429 JSON responses with `Retry-After`.
- ✅ **Strict input validation & sanitization** using Zod `.strict()` schemas and XSS sanitization for incoming strings; unexpected fields are rejected with 400 responses.
- ✅ **Secure API key handling**: no secrets in source. Add required secrets in `.env` or better in a secret manager (GitHub Actions Secrets, Vault). See `/server/.env.example`.
- ✅ **Other OWASP best practices**: `helmet` security headers, small JSON body size limit, centralized error handling, and CORS configuration via `CORS_ORIGIN`.

All changes are additive — the frontend client remains unchanged and will keep working. The server is optional and can be run in dev mode alongside Vite.

## How to run the server locally

1. Install server deps: `cd server && npm install`
2. Copy `.env.example` to `.env` and set `APP_API_KEY` and `CORS_ORIGIN` appropriately.
3. Start dev server: `npm run dev:server` (from the repo root) — it runs on port `4000` by default.

Example endpoints:

- `GET /api/example/health` — health check
- `POST /api/example/echo` — validates and echoes a payload (`name`, optional `email`, optional `message`)

## Notes on API keys and secrets

- Never prefix secrets with `VITE_` — Vite exposes any `VITE_` variable to client bundles.
- Use a secrets manager (GitHub Secrets, AWS Secrets Manager, HashiCorp Vault) in production and rotate keys regularly.
- Limit secrets' scope and permissions and use short TTLs when possible.

## Next steps & suggestions

- Hook your real backend or payment provider behind this server to centralize request validation and rate limits.
- Add integration tests to verify rate-limits and validation under load.
- Configure CI/CD to inject environment secrets and run security linters/Scans (Snyk, Dependabot alerts, secret scanning).

If you'd like, I can open a PR with these changes and include tests for the new server. 🔧
