import { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { NotFound } from "src/pages";
import {
  LoginForm,
  LoginCreate,
  LoginForgotPassword,
  LoginResetPasswowd,
} from "src/core/components";
import { UserContext } from "src/core/contexts";
import { ANY, LOGIN, LOGIN_PATHS, MY_ACCOUNT } from "src/routes/paths";

import styles from "./Login.module.css";

export const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Redirect to={MY_ACCOUNT} />;

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
          <Route path={ANY} component={NotFound} />
        </Switch>
      </div>
    </section>
  );
};
