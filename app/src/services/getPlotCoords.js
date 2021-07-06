import axios from 'axios';

const { REACT_APP_API_KEY: API_KEY } = process.env;
const BASE_URL = 'https://geocode.search.hereapi.com/v1/geocode';

export const getPlotCoords = ({ query }) => {
  const params = { apiKey: `${API_KEY}`, q: `${query},  Antioquia` };
  return axios.get(BASE_URL, { params })
    .then((res) => res.data.items[0])
    .catch((err) => console.log(err));
};
