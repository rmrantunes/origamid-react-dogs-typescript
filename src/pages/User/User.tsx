import { Route, Switch } from "react-router-dom";
import {
  Feed,
  UserHeader,
  UserPhotoPost,
  UserStats,
} from "src/core/components";
import { MY_ACCOUNT_PATHS, MY_ACCOUNT } from "src/routes/paths";

export const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Switch>
        <Route path={MY_ACCOUNT} exact component={Feed} />
        <Route path={MY_ACCOUNT_PATHS.POST_PHOTO} component={UserPhotoPost} />
        <Route path={MY_ACCOUNT_PATHS.STATS} component={UserStats} />
      </Switch>
    </section>
  );
};
