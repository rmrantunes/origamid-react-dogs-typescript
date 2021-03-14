import { FormEvent, useContext } from "react";
import { Link } from "react-router-dom";
import { Input, Button, ErrorMessage, Head } from "src/core/components";
import { UserContext } from "src/core/contexts";
import { useForm } from "src/core/hooks";

import styles from "./LoginForm.module.css";
import stylesBtn from "src/core/components/Forms/Button.module.css";

export const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { loginUser, error, loading } = useContext(UserContext);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    if (!username.validate() || !password.validate()) return;
    loginUser(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form onSubmit={handleLogin} className={styles.form}>
        <Input name="username" label="Usuário" {...username} />
        <Input name="password" type="password" label="Senha" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        {error && <ErrorMessage {...{ error: "Dados incorretos." }} />}
      </form>

      <Link to="/login/forgot-password" className={styles.forgotPassword}>
        Esqueci a senha
      </Link>

      <div className={styles.signUp}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link to="/login/create" className={stylesBtn.button}>
          Cadastrar
        </Link>
      </div>
    </section>
  );
};
