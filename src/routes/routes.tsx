import { Switch, Route } from "react-router-dom";
import { Home, Login, User } from "src/pages";
import { ProtectedRoute } from "src/routes/ProtectedRoute";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <ProtectedRoute redirectPath="/login">
        <Route path="/profile" component={User} />
      </ProtectedRoute>
    </Switch>
  );
};
