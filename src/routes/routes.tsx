import { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { UserContext } from "src/core/contexts";
import { Home, Login, User } from "src/pages";

import { ProtectedRoute } from "src/routes/ProtectedRoute";
import { ROOT, LOGIN_PATH, PROFILE_PATH } from "src/routes/paths";

export const Routes = () => {
  const { login } = useContext(UserContext);
  return (
    <Switch>
      <Route path={ROOT} exact component={Home} />
      <Route path={LOGIN_PATH} component={Login} />
      <ProtectedRoute condition={login} redirectPath={LOGIN_PATH}>
        <Route path={PROFILE_PATH} component={User} />
      </ProtectedRoute>
    </Switch>
  );
};
