import express from "express";
import { validateBody } from "../middleware/validation";
import { BookingSchema } from "../schemas";
import { getEventById, createBooking, getBookings } from "../data/store";
import { requireApiKey } from "../middleware/apiKeyAuth";

export const bookingsRouter = express.Router();

// GET /api/bookings - list bookings (protected)
bookingsRouter.get("/", requireApiKey, (_req, res) => {
  // Intentionally simple for now
  const bookings = getBookings();
  res.json({ ok: true, data: bookings });
});

// POST /api/bookings - create a booking
bookingsRouter.post("/", requireApiKey, validateBody(BookingSchema), (req, res) => {
  const payload = req.body as any;

  // Business rules: event exists and date/time must be permitted
  const event = getEventById(payload.eventId);
  if (!event) return res.status(400).json({ error: "Invalid eventId" });
  if (!event.dates.includes(payload.date) || !event.times.includes(payload.time)) {
    return res.status(400).json({ error: "Invalid date/time for selected event" });
  }

  // Create booking in data store
  const booking = createBooking({
    eventId: payload.eventId,
    date: payload.date,
    time: payload.time,
    ticketQuantity: payload.ticketQuantity,
    name: payload.name,
    email: payload.email,
  });

  res.status(201).json({ ok: true, data: booking });
});