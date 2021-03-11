import React from "react";
import { Redirect } from "react-router";
import { HOME } from "src/routes/paths";

interface ProtectedRouteProps {
  redirectPath?: string;
  /** Null for idle state. For example: when getting token on localStorage */
  condition: boolean | null;
  // TO DO: for a better UX, render a idle state component
  // idleComponent?: ReactNode;
  // return idleComponent || <></>;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  redirectPath,
  condition,
}) => {
  const hasAccess = condition === true;
  const forbiddenAccess = condition === false;

  if (hasAccess) return <>{children}</>;
  if (forbiddenAccess) return <Redirect to={redirectPath || HOME} />;
  return <></>;
};
