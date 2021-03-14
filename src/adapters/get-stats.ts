import { API_URL } from "./endpoints";

export function GET_STATS_FETCH_CONFIG(token: string) {
  return {
    url: API_URL + "/api/stats",
    options: {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    },
  };
}
