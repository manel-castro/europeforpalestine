import express from "express";
import cors from "cors";
import { z } from "zod";
import { createSubscriber } from "./listmonkClient";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

const subscribeSchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
});

app.post("/subscribe", async (req, res) => {
  const parse = subscribeSchema.safeParse(req.body);
  if (!parse.success) {
    return res
      .status(400)
      .json({ error: "invalid_payload", details: parse.error.format() });
  }

  try {
    if (!process.env.LISTMONK_API_KEY) {
      throw new Error(
        "LISTMONK_API_KEY is not set in the newsletter backend. Set LISTMONK_API_KEY to a valid listmonk API key."
      );
    }
    if (!process.env.LISTMONK_API_USER) {
      throw new Error(
        "LISTMONK_API_USER is not set in the newsletter backend. Set LISTMONK_API_USER to a valid listmonk API user."
      );
    }
    const result = await createSubscriber({
      email: parse.data.email,
      name: parse.data.name,
    });
    return res.json({ ok: true, result });
  } catch (err: any) {
    return res
      .status(500)
      .json({ ok: false, error: err.message || String(err) });
  }
});

app.get("/health", (_, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`newsletter backend listening on ${PORT}`);
});
