import { useEffect, useState } from 'react';

export const useFetch = <T = unknown>(callback: () => Promise<T> | null, dependencies?: any[]) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<T | null>(null);

  useEffect(
    () => {
      const onCallback = async () => {
        setLoading(true);
        setResponse(null);
        try {
          const data = await callback();
          setResponse(data);
          setLoading(false);
        } catch (e: any) {
          setError(e);
          setLoading(false);
        } finally {
          setLoading(false);
        }
      };
      onCallback();
    },
    dependencies ? dependencies : [],
  );

  return { loading, response, error };
};
