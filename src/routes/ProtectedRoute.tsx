import { ReactNode } from "react";
import { Redirect } from "react-router";
import { HOME } from "src/routes/paths";

interface ProtectedRouteProps {
  redirectPath?: string;
  /** Null for idle state. For example: when getting token on localStorage */
  condition: boolean | null;
  /** This will be shown when `condition` is `null` */
  fallback?: ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  redirectPath,
  condition,
  fallback,
}) => {
  const hasAccess = condition === true;
  const forbiddenAccess = condition === false;

  if (hasAccess) return <>{children}</>;
  if (forbiddenAccess) return <Redirect to={redirectPath || HOME} />;
  return fallback ? <>{fallback}</> : <></>;
};
