import { API_URL } from "./endpoints";

export function GET_TOKEN_FETCH_CONFIG(body: any) {
  return {
    url: API_URL + "/jwt-auth/v1/token",
    options: {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    },
  };
}

export function VALIDATE_TOKEN_FETCH_CONFIG(token: string) {
  return {
    url: API_URL + "/jwt-auth/v1/token/validate",
    options: {
      method: "POST",
      headers: { Authorization: "Bearer " + token },
    },
  };
}

export function GET_USER_FETCH_CONFIG(token: string) {
  return {
    url: API_URL + "/api/user",
    options: {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    },
  };
}
