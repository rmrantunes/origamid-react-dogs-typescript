import { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  LoginForm,
  LoginCreate,
  LoginForgotPassword,
  LoginResetPasswowd,
} from "src/core/components";
import { UserContext } from "src/core/contexts";
import { LOGIN, LOGIN_PATHS, PROFILE } from "src/routes/paths";

import styles from "./Login.module.css";

export const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Redirect to={PROFILE} />;

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Switch>
          <Route path={LOGIN} exact component={LoginForm} />
          <Route path={LOGIN_PATHS.CREATE} component={LoginCreate} />
          <Route
            path={LOGIN_PATHS.FORGOT_PASSWORD}
            component={LoginForgotPassword}
          />
          <Route
            path={LOGIN_PATHS.RESET_PASSWORD}
            component={LoginResetPasswowd}
          />
        </Switch>
      </div>
    </section>
  );
};
