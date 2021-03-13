import { ReactNode } from "react";
import { Redirect, Route, RouteProps, Switch } from "react-router";
import { HOME } from "src/routes/paths";

interface ProtectedRouteProps extends RouteProps {
  redirectPath?: string;
  /** Null for idle state. For example: when getting token on localStorage. */
  condition: boolean | null;
  /** This will be shown when @property `condition` is `null`. For expample: `<Loading />` */
  fallback?: ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  redirectPath,
  condition,
  fallback,
  ...routeProps
}) => {
  const hasAccess = condition === true;
  const forbiddenAccess = condition === false;

  if (hasAccess)
    return (
      <Switch>
        <Route {...routeProps} />
      </Switch>
    );
  if (forbiddenAccess) return <Redirect to={redirectPath || HOME} />;
  return fallback ? <>{fallback}</> : <></>;
};
