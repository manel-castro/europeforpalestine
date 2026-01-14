import axios from "axios";

export interface SubscriberPayload {
  email: string;
  name?: string;
  lists?: number[]; // list IDs
  active?: boolean;
}

const getBaseUrl = () => process.env.LISTMONK_API_URL || "http://listmonk:9000";
const getApiKey = () => process.env.LISTMONK_API_KEY || "";

export async function createSubscriber(payload: SubscriberPayload) {
  const url = `${getBaseUrl().replace(/\/$/, "")}/api/subscribers`;
  const apiKey = getApiKey();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (apiKey) {
    // Use X-API-Key header (preferred for many listmonk setups).
    // Avoid sending `Authorization: Bearer` as some listmonk builds reject unknown schemes.
    headers["X-API-Key"] = apiKey;
  }

  const body = {
    subscribers: [
      {
        email: payload.email,
        name: payload.name || "",
        active: payload.active === undefined ? true : payload.active,
        lists: payload.lists || [],
      },
    ],
  };

  try {
    const res = await axios.post(url, body, { headers });
    return res.data;
  } catch (err: any) {
    if (err.response) {
      const status = err.response.status;
      const data = err.response.data;
      throw new Error(`listmonk error ${status}: ${JSON.stringify(data)}`);
    }
    throw err;
  }
}
