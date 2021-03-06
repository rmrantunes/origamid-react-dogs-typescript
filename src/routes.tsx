import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "src/pages/Home";
import { Login } from "src/pages/Login";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};
