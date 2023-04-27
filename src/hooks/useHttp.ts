import { useState, useCallback } from "react";

interface RequestConfig {
  url: string;
  method?: string;
  body?: any;
  headers?: any;
}

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const sendRequest = useCallback(
    async (
      { url, method = "GET", body, headers = {} }: RequestConfig,
      applyData?: (data: any) => void
    ) => {
      setIsLoading(true);
      try {
        const response = await fetch(url, {
          method,
          headers,
          body,
        });
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        applyData && applyData(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    []
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
