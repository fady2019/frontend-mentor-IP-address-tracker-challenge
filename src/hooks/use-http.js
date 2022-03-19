import { useCallback, useState } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const request = useCallback(async (url, options) => {
    setIsLoading(true);

    try {
      const res = await fetch(url, options);

      if (!res.ok) {
        throw new Error('Something went wrong, try again!');
      }

      const data = await res.json();

      setResponse(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }

    setIsLoading(false);
  }, []);

  const clearError = () => {
    setError(null);
  };

  return { request, response, isLoading, error, clearError };
};

export default useHttp;
