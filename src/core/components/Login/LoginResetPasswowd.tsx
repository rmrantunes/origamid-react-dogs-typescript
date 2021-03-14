import { FormEvent, useEffect, useState } from "react";
import { RESET_PASSWORD_FETCH_CONFIG } from "src/adapters";
import { Input, Button, ErrorMessage, Head } from "src/core/components";
import { useFetch, useForm, useHistoryFunctions } from "src/core/hooks";
import { LOGIN } from "src/routes/paths";

export const LoginResetPasswowd = () => {
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");
  const newPassword = useForm();
  const { error, loading, request } = useFetch();
  const { redirectTo } = useHistoryFunctions();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function confirmNewPassword(event: FormEvent) {
    if (!key || !login || !newPassword.validate()) return;
    event.preventDefault();
    const { url, options } = RESET_PASSWORD_FETCH_CONFIG({
      login,
      key,
      password: newPassword.value,
    });

    const { response } = await request(url, options);
    if (response?.ok) redirectTo(LOGIN);
  }

  return (
    <div>
      <Head title="Nova senha" />
      <h1 className="title">Crie uma nova senha</h1>
      <form onSubmit={confirmNewPassword}>
        <Input
          label="Nova Senha"
          type="password"
          name="new-password"
          {...newPassword}
        />
        <Button disabled={loading}>
          {loading ? "Confirmando" : "Confirmar"}
        </Button>
      </form>
      {error && <ErrorMessage {...{ error }} />}
    </div>
  );
};
