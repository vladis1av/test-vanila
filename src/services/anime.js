import { BASE_API_URL } from "./api.js";

import asyncFetch from "../utils/asyncFetch.js";

export const GET_ANIMES_URL = `${BASE_API_URL}/animes`;

export const getAnimeById = async (id) => await asyncFetch(`${GET_ANIMES_URL}/${id}`);

export const getAnimes = async ({
  studio,
  kind,
  order,
  limit,
}) => {
  const fields = ['studio', 'kind', 'order', 'limit'];
  const queryParams = [];

  [studio, kind, order, limit].forEach((handledFilter, idx) => {
    if (handledFilter) {
      queryParams.push(`${fields[idx]}=${handledFilter}`);
    }
  });

  const animes = await asyncFetch(`${GET_ANIMES_URL}?${queryParams.join('&')}`);

  return animes;
};
