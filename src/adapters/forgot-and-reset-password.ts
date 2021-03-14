import { API_URL } from "./endpoints";

interface ForgotPasswordFetchConfig {
  login: string;
  url: string;
}

export function FORGOT_PASSWORD_FETCH_CONFIG(body: ForgotPasswordFetchConfig) {
  return {
    url: API_URL + "/api/password/lost",
    options: {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    },
  };
}

interface ResetPasswordFetchConfig {
  login: string;
  key: string;
  password: string;
}

export function RESET_PASSWORD_FETCH_CONFIG(body: ResetPasswordFetchConfig) {
  return {
    url: API_URL + "/api/password/reset",
    options: {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    },
  };
}
