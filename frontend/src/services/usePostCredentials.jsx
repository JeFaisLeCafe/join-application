import { useState } from "react";
import easypost from "../utils/easypost";

const usePostCredentials = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  async function postCredentials({ username, password }) {
    try {
      const response = await easypost("/login", { username, password });
      if (!response.error) {
        setError(null);
        setUser(response.user);
      } else {
        setError(response);
        setUser({});
      }
    } catch (e) {
      console.error("error posting user credentials", e);
    }
  }

  return { postCredentials, user, error };
};

export default usePostCredentials;
