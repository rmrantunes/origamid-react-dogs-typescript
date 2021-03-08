export interface TokenResponse {
  token: string;
  user_display_name: string;
  user_email: string;
  user_nicename: string;
}

export interface ValidateTokenResponse {
  code: "jwt_auth_valid_token" | "jwt_auth_invalid_token";
  message: string;
}

export interface User {
  email: string;
  id: number;
  nome: string;
  username: string;
}
