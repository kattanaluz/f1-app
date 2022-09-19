import React, { useEffect, useState } from "react";
import axios from "axios";
import { RaceTable } from "../types/schedule";

const BASE_URL = "http://ergast.com/api/f1/";

export default function useRequest(details: string) {
  const [response, setResponse] = useState<RaceTable>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${details}.json`)
      .then((res) => {
        if (res.status === 200 && res.statusText === "OK") {
          setIsLoading(false);
          setResponse(res.data.MRData.RaceTable);
        }
      })
      .catch((err: Error) => {
        setError(true);
        console.warn(err);
      });
  }, []);

  return { response, isLoading, error };
}
