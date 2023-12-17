import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_m2lgK5Nia1pd8DUl24UNtOhGRwIFqfFsx7kE9eRmryfEzHhp0uvjNBrqx2VKChqY';

export const fetchBreeds = () => {
  return axios.get('https://api.thecatapi.com/v1/breeds');
};

export const fetchCatByBreeds = breedId => {
  return axios.get(
    'https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}'
  );
};
