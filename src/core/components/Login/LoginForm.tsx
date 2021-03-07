import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "src/core/components";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event: FormEvent) {
    event.preventDefault();
    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then(console.log);
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <Input name="username" label="Usuário" />
        <Input name="password" type="password" label="Senha" />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/create">Cadastrar</Link>
    </section>
  );
};
