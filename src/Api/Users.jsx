import axios from 'axios';
import { baseAxiosUrl } from './BaseUrl';

axios.defaults.baseURL = baseAxiosUrl;

export const getUsersApi = () => {
  try {
    return axios.get('/users').then(data => {
      return data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const changeUserApi = (id, user) => {
  console.log(user);
  try {
    return axios
      .put(`/users/${id}`, { add: user.add, followers: user.followers })
      .then(data => {
        return data.data;
      });
  } catch (error) {
    console.log(error);
  }
};
