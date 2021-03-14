/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

export function useKeyUp(key: string, callback: () => any) {
  useEffect(() => {
    function handleKeyUp(event: KeyboardEvent) {
      if (event.key === key) callback();
    }

    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, []);
}
