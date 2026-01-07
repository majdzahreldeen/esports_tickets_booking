import express from "express";
import { getEvents, getEventById } from "../data/store";

export const eventsRouter = express.Router();

// GET /api/events
eventsRouter.get("/", (_req, res) => {
  const events = getEvents();
  res.json({ ok: true, data: events });
});

// GET /api/events/:id
eventsRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  const event = getEventById(id);
  if (!event) return res.status(404).json({ error: "Event not found" });
  res.json({ ok: true, data: event });
});