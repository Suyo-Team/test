import axios from 'axios';

const API_URL = '/api/plots';

export const getAllPlots = ({ token }) => {
  const authorization = `Bearer ${token}`;
  const headers = { Authorization: authorization };
  return axios.get(`${API_URL}`, { headers })
    .then((res) => res.data.plots);
};

export const createPlot = ({ token, plot }) => {
  const authorization = `Bearer ${token}`;
  const headers = { Authorization: authorization };
  return axios.post(`${API_URL}`, plot, { headers })
    .then((res) => res.data.createdPlot);
};

export const updatePlot = ({ token, plot }) => {
  const authorization = `Bearer ${token}`;
  const headers = { Authorization: authorization };
  const URL = `${API_URL}/${plot.id}`;
  return axios.put(URL, plot, { headers })
    .then((res) => res.json());
};

export const deletePlot = ({ token, id }) => {
  const authorization = `Bearer ${token}`;
  const headers = { Authorization: authorization };
  const URL = `${API_URL}/${id}`;
  return axios.delete(URL, { headers });
};
