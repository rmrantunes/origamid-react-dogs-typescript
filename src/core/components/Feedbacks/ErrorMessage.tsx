import React from "react";

interface ErrorMessageProps {
  error: string | null;
}

export const ErrorMessage = ({ error }: ErrorMessageProps) => {
  if (!error) return null;
  return <p style={{ color: "#f31", margin: "1rem 0" }}>{error}</p>;
};
