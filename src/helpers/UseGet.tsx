import { useCallback, useEffect, useState } from "react";

const useGet = (url: string) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const get = useCallback(() => {
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => setData(responseData))
      .then(() => setLoading(false))
      .catch((error) => setError(error));

    console.log(data);
  }, [data, url]);

  useEffect(() => {
    if (loading || data) return;
    setLoading(true);
    get();
  }, [loading, setLoading, data, get]);

  return { data, loading, error };
};

export default useGet;
