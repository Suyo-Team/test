import axios from 'axios';

const API_KEY = 'C6R5htIDxW7Fuy7v2YtXWAfZCfkQZg2tpWbfDgpbSzU';
const BASE_URL = 'https://geocode.search.hereapi.com/v1/geocode';

export const getPlotCoords = ({ query }) => {
  const params = { apiKey: `${API_KEY}`, q: `${query},  Antioquia` };
  return axios.get(BASE_URL, { params })
    .then((res) => res.data.items[0])
    .catch((err) => console.log(err));
};
