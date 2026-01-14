import axios from "axios";

export interface SubscriberPayload {
  email: string;
  name?: string;
  lists?: number[]; // list IDs
  active?: boolean;
}

const getBaseUrl = () => process.env.LISTMONK_API_URL || "http://listmonk:9000";
const getApiKey = () => process.env.LISTMONK_API_KEY || "";
const getApiUser = () => process.env.LISTMONK_API_USER || "";

export async function createSubscriber(payload: SubscriberPayload) {
  const url = `${getBaseUrl().replace(/\/$/, "")}/api/subscribers`;
  const apiKey = getApiKey();
  const apiUser = getApiUser();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (apiKey) {
    // Per listmonk API docs, send the token using the `Authorization: Token <key>` header.
    // Keep `X-API-Key` as a fallback for setups that accept it.
    headers["Authorization"] = `token ${apiUser}:${apiKey}`;
  }

  console.log("dbg1 apiKey: ", apiKey);

  const body = {
    email: payload.email,
    name: payload.name || "",
    status: "enabled",
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
