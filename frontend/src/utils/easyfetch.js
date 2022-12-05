import { apiUrl } from "../constants/api";

export default async function easyfetch(url) {
  try {
    const response = await fetch(`${apiUrl}${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const res = await response.json();

    return res;
  } catch (e) {
    console.warn("error easyfetch", e);
  }
}
