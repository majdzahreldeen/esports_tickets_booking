import express from "express";
import { getShop, getShopItem, createPurchase } from "../data/store";
import { validateBody } from "../middleware/validation";
import { PurchaseSchema } from "../schemas";
import { requireApiKey } from "../middleware/apiKeyAuth";

export const shopRouter = express.Router();

shopRouter.get("/", (_req, res) => {
  res.json({ ok: true, data: getShop() });
});

shopRouter.get("/:id", (req, res) => {
  const item = getShopItem(req.params.id);
  if (!item) return res.status(404).json({ error: "Item not found" });
  res.json({ ok: true, data: item });
});

shopRouter.post("/purchase", requireApiKey, validateBody(PurchaseSchema), (req, res) => {
  const payload = req.body as any;
  const result = createPurchase(payload.itemId, payload.quantity, payload.buyerName, payload.buyerEmail);
  if (!result) return res.status(400).json({ error: "Invalid item" });
  res.status(201).json({ ok: true, data: { purchase: { item: result.item, booking: result.booking } } });
});