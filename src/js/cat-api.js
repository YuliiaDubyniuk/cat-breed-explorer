import axios from 'axios';

const API_KEY =
  'live_LjXvsCGSzoL58oYUJUOPMNssgzOxIGswIATUwrszMYjZhhUG9LWgxCtqLmMwF7br';
axios.defaults.headers.common['x-api-key'] = API_KEY;
const BREEDS_URL = 'https://api.thecatapi.com/v1/breeds';
const SEARCH_IMG_URL = 'https://api.thecatapi.com/v1/images/search';

function fetchBreeds() {
  return axios.get(BREEDS_URL);
}

function fetchCatByBreed(breedId) {
  return axios.get(`${SEARCH_IMG_URL}?breed_ids=${breedId}`);
}

export { fetchBreeds, fetchCatByBreed };
