import { FormEvent } from "react";
import { FORGOT_PASSWORD_FETCH_CONFIG } from "src/adapters";
import { Input, Button, ErrorMessage, Head } from "src/core/components";
import { useFetch, useForm } from "src/core/hooks";
import { LOGIN_PATHS } from "src/routes/paths";

export const LoginForgotPassword = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function sendResetPasswordEmail(event: FormEvent) {
    event.preventDefault();
    if (!login.validate()) return;

    const { url, options } = FORGOT_PASSWORD_FETCH_CONFIG({
      login: login.value,
      url: "http://localhost:3000" + LOGIN_PATHS.RESET_PASSWORD,
    });

    await request(url, options);
  }

  return (
    <section>
      <Head title="Perdeu a senha?" />
      <h1 className="title">Perdeu a senha?</h1>
      {data && <p style={{ color: "#4c1" }}>{data}</p>}
      {!data && (
        <form onSubmit={sendResetPasswordEmail}>
          <Input label="Email / Usuário" name="login" {...login} />

          <Button disabled={loading}>
            {loading ? "Enviando..." : "Enviar Email"}
          </Button>
        </form>
      )}
      {error && <ErrorMessage {...{ error }} />}
    </section>
  );
};
