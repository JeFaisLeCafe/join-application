import { apiUrl } from "../constants/api";

export default async function easypost(url, data) {
  try {
    const response = await fetch(`${apiUrl}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const res = await response.json();

    return res;
  } catch (e) {
    console.warn("error easypost", e);
  }
}
