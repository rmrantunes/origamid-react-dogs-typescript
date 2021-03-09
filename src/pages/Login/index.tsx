import { useContext } from "react";
import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";
import {
  LoginForm,
  LoginCreate,
  LoginForgotPassword,
  LoginResetPasswowd,
} from "src/core/components";
import { UserContext } from "src/core/contexts";

import styles from "./Login.module.css";

export const Login = () => {
  const { path } = useRouteMatch();
  const { login } = useContext(UserContext);

  if (login === true) return <Redirect to="/profile" />;

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Switch>
          <Route path={path} exact component={LoginForm} />
          <Route path={`${path}/create`} component={LoginCreate} />
          <Route
            path={`${path}/forgot-password`}
            component={LoginForgotPassword}
          />
          <Route
            path={`${path}/reset-password`}
            component={LoginResetPasswowd}
          />
        </Switch>
      </div>
    </section>
  );
};
