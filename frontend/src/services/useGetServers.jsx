import { useState, useEffect } from "react";
import easyfetch from "../utils/easyfetch";

const useGetServers = () => {
  const [servers, setServers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getServers() {
      try {
        const response = await easyfetch("/servers");
        if (!response?.error) {
          setError(null);
          setServers(response?.servers);
        } else {
          setError(response);
          setServers([]);
        }
      } catch (e) {
        console.error("error get servers", e);
        setError(e);
      }
    }

    getServers();
  }, []);

  return { servers, error };
};

export default useGetServers;
