import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, Login } from "src/pages";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};
