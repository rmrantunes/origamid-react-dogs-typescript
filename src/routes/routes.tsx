import { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { UserContext } from "src/core/contexts";
import { Home, Login, User } from "src/pages";

import { ProtectedRoute } from "src/routes/ProtectedRoute";
import { HOME, LOGIN, PROFILE } from "src/routes/paths";

export const Routes = () => {
  const { login } = useContext(UserContext);
  return (
    <Switch>
      <Route path={HOME} exact component={Home} />
      <Route path={LOGIN} component={Login} />
      <ProtectedRoute condition={login} redirectPath={LOGIN}>
        <Route path={PROFILE} component={User} />
      </ProtectedRoute>
    </Switch>
  );
};
