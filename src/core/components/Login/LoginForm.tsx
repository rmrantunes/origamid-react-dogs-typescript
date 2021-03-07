import { FormEvent, useContext } from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "src/core/components";
import { UserContext } from "src/core/contexts";
import { useForm } from "src/core/hooks";

export const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { loginUser } = useContext(UserContext);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    if (!username.validate() || !password.validate()) return;
    loginUser(username.value, password.value);
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
