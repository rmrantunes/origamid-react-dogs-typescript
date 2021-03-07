export interface TokenResponse {
  token: string;
  user_display_name: string;
  user_email: string;
  user_nicename: string;
}

export interface User {
  email: string;
  id: number;
  nome: string;
  username: string;
}
