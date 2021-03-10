import { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { UserContext } from "src/core/contexts";
import { Home, Login, User } from "src/pages";
import { ProtectedRoute } from "src/routes/ProtectedRoute";

export const Routes = () => {
  const { login } = useContext(UserContext);
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <ProtectedRoute condition={login} redirectPath="/login">
        <Route path="/profile" component={User} />
      </ProtectedRoute>
    </Switch>
  );
};
