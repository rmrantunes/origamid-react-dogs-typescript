import React, { useContext } from "react";
import { Redirect } from "react-router";
import { UserContext } from "src/core/contexts";

interface ProtectedRouteProps {
  redirectPath?: string;
  condition?: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  redirectPath,
}) => {
  const { login } = useContext(UserContext);

  const path = redirectPath || "/";
  const hasAccess = login === true;
  const forbiddenAccess = login === false;

  if (hasAccess) return <>{children}</>;
  if (forbiddenAccess) return <Redirect to={path} />;
  return <></>;
};
