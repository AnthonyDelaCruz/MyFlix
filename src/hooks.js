import React, { useEffect, useState } from "react";

import { fetchMoveApi } from "./utils";

export const useFetchMoviedata = (urlPath) => {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchMoveApi(urlPath)
      .then((res) => {
        if (res.error) {
          setError(res.error);
        } else {
          setResults(res);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return [results, loading, error];
};
