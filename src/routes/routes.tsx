import { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { UserContext } from "src/core/contexts";
import { Home, Login, User, Photo, Profile, NotFound } from "src/pages";

import { ProtectedRoute } from "src/routes/ProtectedRoute";
import {
  ANY,
  HOME,
  LOGIN,
  MY_ACCOUNT,
  PHOTO,
  PHOTO_PARAMS,
  PROFILE,
  PROFILE_PARAMS,
} from "src/routes/paths";
import { Loading } from "src/core/components";

export const Routes = () => {
  const { login } = useContext(UserContext);
  return (
    <Switch>
      <Route path={HOME} exact component={Home} />
      <Route path={LOGIN} component={Login} />
      <Route path={PHOTO + PHOTO_PARAMS.ID} component={Photo} />
      <Route path={PROFILE + PROFILE_PARAMS.USER} component={Profile} />
      <ProtectedRoute
        path={MY_ACCOUNT}
        component={User}
        condition={login}
        redirectPath={LOGIN}
        fallback={<Loading />}
      />
      <Route path={ANY} component={NotFound} />
    </Switch>
  );
};
