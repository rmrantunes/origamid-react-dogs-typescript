import { FormEvent } from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "src/core/components";
import { useForm } from "src/core/hooks";

export const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  function handleLogin(event: FormEvent) {
    event.preventDefault();

    if (!username.validate() && !password.validate()) return;

    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
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
        <Input name="username" label="Usuário" {...username} />
        <Input name="password" type="password" label="Senha" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/create">Cadastrar</Link>
    </section>
  );
};
