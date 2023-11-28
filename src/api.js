import axios from 'axios';

const API_KEY = '98a4f8e2d45ec74139331a2b50d1d3ee';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const apiFetchTrendingMovies = async () => {
  const response = await axios.get(
    `trending/movie/day?language=en-US&api_key=${API_KEY}`
  );
  return response;
};

export const apiSearchMovies = async value => {
  const response = await axios.get(
    `search/movie?query=${value}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`
  );
  return response.data.results;
};

export const apiMovieDetails = async ({ id }) => {
  const response = await axios.get(
    `movie/${id}?language=en-US&append_to_response=images,credits&api_key=${API_KEY}`
  );
  return response.data;
};

export const apiCast = async ({ id }) => {
  const response = await axios.get(
    `movie/${id}/credits?language=en-US&append_to_response=images,credits&api_key=${API_KEY}`
  );
  return response.data;
};

export const apiReviews = async ({ id }) => {
  const response = await axios.get(
    `movie/${id}/reviews?language=en-US&append_to_response=images,credits&api_key=${API_KEY}`
  );
  return response.data;
};
