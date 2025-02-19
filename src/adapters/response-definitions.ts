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

export interface Photo {
  acessos: string;
  author: string;
  date: Date;
  id: number;
  idade: string;
  peso: string;
  src: string;
  title: string;
  total_comments: string;
}

export interface Comment {
  comment_ID: number;
  comment_author: string;
  comment_content: string;
}

export interface PhotoWithComments {
  photo: Photo;
  comments: Comment[];
}

export interface Stats {
  id: number;
  title: string;
  acessos: string;
}
