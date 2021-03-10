import React from "react";
import { Redirect } from "react-router";

interface ProtectedRouteProps {
  redirectPath?: string;
  /** Null for idle state. For example: when getting token on localStorage */
  condition: boolean | null;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  redirectPath,
  condition,
}) => {
  const hasAccess = condition === true;
  const forbiddenAccess = condition === false;

  if (hasAccess) return <>{children}</>;
  if (forbiddenAccess) return <Redirect to={redirectPath || "/"} />;
  return <></>;
};
