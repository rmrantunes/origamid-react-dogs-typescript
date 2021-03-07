import { FormEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  TokenResponse,
  TOKEN_POST,
  UserResponse,
  USER_GET,
} from "src/adapters";
import { Input, Button } from "src/core/components";
import { useForm } from "src/core/hooks";

export const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) getUser(token);
  }, []);

  async function getUser(token: string) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const user: UserResponse = await response.json();
  }

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    if (!username.validate() || !password.validate()) return;

    const { url, options } = TOKEN_POST({
      username: username.value,
      password: password.value,
    });

    const response = await fetch(url, options);
    const login: TokenResponse = await response.json();

    getUser(login.token);
    window.localStorage.setItem("token", login.token);
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <Input name="username" label="Usuário" {...username} />
        <Input name="password" type="password" label="Senha" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/create">Cadastrar</Link>
    </section>
  );
};
