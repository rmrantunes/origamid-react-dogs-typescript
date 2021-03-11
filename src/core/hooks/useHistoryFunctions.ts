import { useHistory } from "react-router";

export function useHistoryFunctions() {
  const history = useHistory();

  const redirectTo = (path: string) => {
    history.push(path);
  };

  return { redirectTo };
}
