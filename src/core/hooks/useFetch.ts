import { useCallback, useState } from "react";

export function useFetch() {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(
    async (url: string, options: Record<any, any>) => {
      let response;
      let requestData;

      try {
        setError(null);
        setLoading(true);

        response = await fetch(url, options);
        requestData = await response.json();

        if (!response.ok) throw new Error(requestData.message);
      } catch (error) {
        requestData = null;
        setError(error.message);
      } finally {
        setData(requestData);
        setLoading(false);
        return { response, requestData };
      }
    },
    []
  );

  return { data, loading, error, request };
}
