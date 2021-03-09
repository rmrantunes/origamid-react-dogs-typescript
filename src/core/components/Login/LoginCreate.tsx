import { FormEvent, useContext } from "react";
import { CREATE_USER_FETCH_CONFIG } from "src/adapters";
import { Input, Button } from "src/core/components";
import { UserContext } from "src/core/contexts";
import { useForm } from "src/core/hooks";

export const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const { loginUser } = useContext(UserContext);

  async function createUser(event: FormEvent) {
    event.preventDefault();

    const { url, options } = CREATE_USER_FETCH_CONFIG({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const createUserResponse = await fetch(url, options);
    if (!createUserResponse.ok) return;

    loginUser(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={createUser}>
        <Input label="Usuário" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};
