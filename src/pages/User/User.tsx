import { Route, Switch } from "react-router-dom";
import {
  Feed,
  UserHeader,
  UserPhotoPost,
  UserStats,
} from "src/core/components";
import { PROFILE_PATHS } from "src/routes/paths";

export const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Switch>
        <Route path={PROFILE_PATHS.MY_PHOTOS} exact component={Feed} />
        <Route path={PROFILE_PATHS.POST_PHOTO} component={UserPhotoPost} />
        <Route path={PROFILE_PATHS.STATS} component={UserStats} />
      </Switch>
    </section>
  );
};
