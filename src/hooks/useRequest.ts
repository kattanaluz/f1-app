import React, { useEffect, useState } from "react";
import axios from "axios";


const BASE_URL = "http://ergast.com/api/f1/";

export default function useRequest<T>(details: string) {
  const [response, setResponse] = useState<T>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${details}.json`)
      .then((res) => {
        if (res.status === 200 && res.statusText === "OK") {
          setIsLoading(false);
          setResponse(res.data.MRData);
        }
      })
      .catch((err: Error) => {
        setError(true);
        console.warn(err);
      });
  }, []);

  return { response, isLoading, error };
}
