import { z } from "zod";

export const BookingSchema = z
  .object({
    eventId: z.string().min(1),
    date: z.string().min(1),
    time: z.string().min(1),
    ticketQuantity: z.number().int().min(1).max(10),
    name: z.string().min(1).max(100),
    email: z.string().email().max(254).optional(),
  })
  .strict();

export const EchoSchema = z
  .object({
    name: z.string().min(1).max(100),
    email: z.string().email().max(254).optional(),
    message: z.string().max(2000).optional(),
  })
  .strict();

export const PurchaseSchema = z
  .object({
    itemId: z.string().min(1),
    quantity: z.number().int().min(1).max(10),
    buyerName: z.string().min(1).max(100),
    buyerEmail: z.string().email().max(254).optional(),
  })
  .strict();