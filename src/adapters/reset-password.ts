import { API_URL } from "./endpoints";

export function RESET_PASSWORD_FETCH_CONFIG(body: any) {
  return {
    url: API_URL + "/api/password/lost",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    },
    body: JSON.stringify(body),
  };
}
