import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import type { Booking, Event, ShopItem } from "../types";

const DB_PATH = path.resolve(__dirname, "..", "data", "db.json");

type DbShape = {
  events: Event[];
  shop: ShopItem[];
  bookings: Booking[];
};

// Default seed data
const DEFAULT_DB: DbShape = {
  events: [
    {
      id: "worlds-2024",
      name: "World Championship 2024",
      game: "League of Legends",
      price: 299,
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
      location: "Seoul, South Korea",
      dates: ["2024-12-15", "2024-12-16", "2024-12-17"],
      times: ["14:00", "18:00"],
      description: "The ultimate League of Legends championship.",
    },
  ],
  shop: [
    { id: "sticker1", name: "Esports Sticker", price: 5, description: "High-quality vinyl sticker" },
  ],
  bookings: [],
};

let db: DbShape | null = null;

function ensureDb() {
  if (db) return;
  try {
    if (fs.existsSync(DB_PATH)) {
      const raw = fs.readFileSync(DB_PATH, "utf-8");
      db = JSON.parse(raw) as DbShape;
    } else {
      db = DEFAULT_DB;
      persist();
    }
  } catch (err) {
    console.error("Could not read DB file, initializing with defaults", err);
    db = DEFAULT_DB;
  }
}

function persist() {
  if (!db) return;
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), "utf-8");
}

export const getEvents = () => {
  ensureDb();
  return (db as DbShape).events;
};

export const getEventById = (id: string) => {
  ensureDb();
  return (db as DbShape).events.find((e) => e.id === id) || null;
};

export const getShop = () => {
  ensureDb();
  return (db as DbShape).shop;
};

export const getShopItem = (id: string) => {
  ensureDb();
  return (db as DbShape).shop.find((s) => s.id === id) || null;
};

export const getBookings = () => {
  ensureDb();
  return (db as DbShape).bookings;
};

export const createBooking = (payload: Omit<Booking, "id" | "createdAt">) => {
  ensureDb();
  const booking: Booking = { id: uuidv4(), createdAt: Date.now(), ...payload };
  (db as DbShape).bookings.push(booking);
  persist();
  return booking;
};

export const createPurchase = (itemId: string, quantity: number, buyerName: string, buyerEmail?: string) => {
  // For now purchases are stored as negative bookings (simple placeholder). In a real app you'd have an orders table.
  ensureDb();
  const item = getShopItem(itemId);
  if (!item) return null;
  const booking = createBooking({
    eventId: `purchase:${itemId}`,
    date: new Date().toISOString(),
    time: "",
    ticketQuantity: quantity,
    name: buyerName,
    email: buyerEmail,
  });
  return { booking, item };
};