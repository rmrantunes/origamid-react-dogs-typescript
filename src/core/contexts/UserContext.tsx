import { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  TokenResponse,
  GET_TOKEN_FETCH_CONFIG,
  VALIDATE_TOKEN_FETCH_CONFIG,
  User,
  GET_USER_FETCH_CONFIG,
} from "src/adapters";
import { useLocalStorage } from "src/core/hooks";

export interface UserContextValue {
  user: User;
  login: boolean;
  loading: boolean;
  error: string | null;
  loginUser(username: string, password: string): Promise<void>;
  logoutUser(): void;
}

export const UserContext = createContext({} as UserContextValue);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState({} as User);
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const history = useHistory();
  const localStorageToken = useLocalStorage("token");

  const redirectTo = (path: string) => {
    history.push(path);
  };

  useEffect(() => {
    async function autoLogin() {
      try {
        setError(null);
        setLoading(true);

        const token = localStorageToken.get();
        if (!token) return;

        const { url, options } = VALIDATE_TOKEN_FETCH_CONFIG(token);
        const response = await fetch(url, options);

        if (!response.ok) throw new Error("Token inválido");

        getUser(token);
      } catch (error) {
        logoutUser();
      } finally {
        setLoading(false);
      }
    }

    autoLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getUser(token: string) {
    const { url, options } = GET_USER_FETCH_CONFIG(token);

    const response = await fetch(url, options);
    const user: User = await response.json();

    setUser(user);
    setLogin(true);
  }

  async function loginUser(username: string, password: string) {
    try {
      setError(null);
      setLoading(true);

      const { url, options } = GET_TOKEN_FETCH_CONFIG({ username, password });

      const response = await fetch(url, options);
      if (!response.ok) throw new Error("Usuário inválido");
      const { token }: TokenResponse = await response.json();

      localStorageToken.set(token);
      await getUser(token);
      redirectTo("/profile");
    } catch (error) {
      setError(error.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  function logoutUser() {
    setUser({} as User);
    setError(null);
    setLoading(false);
    setLogin(false);
    localStorageToken.remove();
    redirectTo("/login");
  }

  return (
    <UserContext.Provider
      value={{ loginUser, logoutUser, user, loading, login, error }}
    >
      {children}
    </UserContext.Provider>
  );
};
