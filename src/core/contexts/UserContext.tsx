import { createContext, useEffect, useState } from "react";
import {
  TokenResponse,
  GET_TOKEN_FETCH_CONFIG,
  VALIDATE_TOKEN_FETCH_CONFIG,
  User,
  GET_USER_FETCH_CONFIG,
} from "src/adapters";
import { useHistoryFunctions, useLocalStorage } from "src/core/hooks";
import { LOGIN, MY_ACCOUNT } from "src/routes/paths";

export interface UserContextValue {
  user: User;
  login: boolean | null;
  loading: boolean;
  error: string | null;
  loginUser(username: string, password: string): Promise<void>;
  logoutUser(): void;
  token: string | null;
}

export const UserContext = createContext({} as UserContextValue);

export const UserProvider: React.FC = ({ children }) => {
  const localStorageToken = useLocalStorage("token");

  const [user, setUser] = useState({} as User);
  const [login, setLogin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const { redirectTo } = useHistoryFunctions();

  useEffect(() => {
    async function autoLogin() {
      try {
        setError(null);
        setLoading(true);

        const token = localStorageToken.get();
        if (!token) {
          setLogin(false);
          setToken(null);
          return;
        }

        setToken(token);

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
      redirectTo(MY_ACCOUNT);
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
    redirectTo(LOGIN);
  }

  return (
    <UserContext.Provider
      value={{ loginUser, logoutUser, user, loading, login, error, token }}
    >
      {children}
    </UserContext.Provider>
  );
};
