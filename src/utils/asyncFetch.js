import { ACCESS_TOKEN, USER_AGENT } from "../services/api.js";

const asyncFetch = async (url) => {
  const response = await fetch(url, {
    headers: {
      "User-Agent": USER_AGENT,
      "Authorization": `Bearer ${ACCESS_TOKEN}`,
    },
  });
  const { status } = response;

  const data = status === 200
    ? await response.json()
    : null;

  return data;
};

export default asyncFetch;
