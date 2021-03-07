import { createContext, useState } from "react";
import {
  TokenResponse,
  TOKEN_POST_FETCH_CONFIG,
  User,
  USER_GET_FETCH_CONFIG,
} from "src/adapters";

export interface UserContextValue {
  user: User;
  loginUser(username: string, password: string): Promise<void>;
}

export const UserContext = createContext({} as UserContextValue);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState({} as User);
  const [login, setLogin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean | null>(false);
  const [error, setError] = useState(null);

  async function getUser(token: string) {
    const { url, options } = USER_GET_FETCH_CONFIG(token);

    const response = await fetch(url, options);
    const user: User = await response.json();

    setUser(user);
    setLogin(true);
  }

  async function loginUser(username: string, password: string) {
    const { url, options } = TOKEN_POST_FETCH_CONFIG({ username, password });

    const response = await fetch(url, options);
    const { token }: TokenResponse = await response.json();

    window.localStorage.setItem("token", token);
    getUser(token);
  }

  return (
    <UserContext.Provider value={{ loginUser, user }}>
      {children}
    </UserContext.Provider>
  );
};
