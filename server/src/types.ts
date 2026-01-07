export type Event = {
  id: string;
  name: string;
  game: string;
  price: number;
  image?: string;
  location?: string;
  dates: string[]; // ISO date strings
  times: string[]; // time strings like "14:00"
  description?: string;
};

export type ShopItem = {
  id: string;
  name: string;
  price: number;
  description?: string;
};

export type Booking = {
  id: string;
  eventId: string;
  date: string;
  time: string;
  ticketQuantity: number;
  name: string;
  email?: string;
  createdAt: number;
};