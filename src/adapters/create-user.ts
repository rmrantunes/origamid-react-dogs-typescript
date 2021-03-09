import { API_URL } from "./endpoints";

export function CREATE_USER_FETCH_CONFIG(body: any) {
  return {
    url: API_URL + "/api/user",
    options: {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    },
  };
}
