//Custom hook for GET method for posts and comments

import { useState, useEffect } from 'react';

const useFetchToRetrieve = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(url, { signal: abortCont.signal });
        if (!response.ok) {
          throw new Error('could not fetch the data from the API');
        }
        const fetchData = await response.json();
        setData(fetchData);
      } catch (error) {
        console.error(error.message);
        setError(error.message);
      }
      setLoading(false);
    };
    fetchData();

      return () => abortCont.abort();
  }, [url]);

  return { data, loading, error };
};

export default useFetchToRetrieve;
