import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

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
        <input
          type="text"
          onChange={({ target }) => setUsername(target.value)}
          value={username}
        />
        <input
          type="text"
          onChange={({ target }) => setPassword(target.value)}
          value={password}
        />
        <button>Entrar</button>
      </form>
      <Link to="/login/create">Cadastrar</Link>
    </section>
  );
};
