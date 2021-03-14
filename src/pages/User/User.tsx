import { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { NotFound } from "src/pages";
import {
  Feed,
  Head,
  UserHeader,
  UserPhotoPost,
  UserStats,
} from "src/core/components";
import { UserContext } from "src/core/contexts";
import { MY_ACCOUNT_PATHS, MY_ACCOUNT, ANY } from "src/routes/paths";

export const User = () => {
  const { user } = useContext(UserContext);

  return (
    <section className="container">
      <Head title="Minha conta" />
      <UserHeader />
      <Switch>
        <Route path={MY_ACCOUNT} exact>
          <Feed idOrUserame={user.id} />
        </Route>
        <Route path={MY_ACCOUNT_PATHS.POST_PHOTO} component={UserPhotoPost} />
        <Route path={MY_ACCOUNT_PATHS.STATS} component={UserStats} />
        <Route path={ANY} component={NotFound} />
      </Switch>
    </section>
  );
};
