import { useEffect, useState } from "react";

function useFetch(apiendpoint) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    fetch(apiendpoint)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(apiendpoint);
      const json = await response.json();
      setData(json);
    } catch (error) {
      setErrorMsg(error.message ? error.message : "something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return [loading, data, errorMsg];
}

export default useFetch;
