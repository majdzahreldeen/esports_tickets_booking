import { z } from "zod";

// Client-side schemas used to validate form steps before proceeding.
// These mirror the server-side validation rules but are permissive for UX.

export const BookingSelectionSchema = z.object({
  eventId: z.string().min(1),
  date: z.string().min(1),
  time: z.string().min(1),
  ticketQuantity: z.number().min(1).max(10),
});

export const PaymentSchema = z.object({
  cardNumber: z
    .string()
    .min(12)
    .max(19)
    .refine((s) => /^[0-9 ]+$/.test(s.trim()), { message: "Invalid card number" }),
  expiry: z
    .string()
    .refine((s) => /^\d{2}\/\d{2}$/.test(s), { message: "Expiry must be in MM/YY format" }),
  cvv: z.string().min(3).max(4).refine((s) => /^\d{3,4}$/.test(s), { message: "Invalid CVV" }),
  name: z.string().min(1).max(100),
});

export const sanitizeString = (s: string) => s.replace(/[<>]/g, ""); // small sanitizer for inputs
