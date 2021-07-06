import axios from 'axios';

const URL = '/api/users';

export const loginUser = (user) => {
  const LOGIN_URL = `${URL}/login`;
  return axios.post(LOGIN_URL, user)
    .then((res) => res.data)
    .catch((err) => console.log('here in error', err));
};

export const registerUser = (user) => axios.post(URL, user)
  .then((res) => res.data)
  .catch((err) => console.log(err));
