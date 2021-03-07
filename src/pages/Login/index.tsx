import { Route, Switch, useRouteMatch } from "react-router-dom";
import {
  LoginForm,
  LoginCreate,
  LoginForgotPassword,
  LoginResetPasswowd,
} from "src/core/components";

export const Login = () => {
  const { path } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={path} exact component={LoginForm} />
        <Route path={`${path}/create`} component={LoginCreate} />
        <Route
          path={`${path}/forgot-password`}
          component={LoginForgotPassword}
        />
        <Route path={`${path}/reset-password`} component={LoginResetPasswowd} />
      </Switch>
    </div>
  );
};
