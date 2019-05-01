import axios from 'axios';
import token from './APItoken';

const Axios = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

const getData = async url => {
  try {
    const response = await Axios.get(`${url}?api_key=${token}`);
    console.log(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const getAllPersons = async () => {
  const res = await getData('persons/');
  return res;
};
const getPopularMovies = async () => {
  const res = await getData('movie/550');
  return res;
};

export { getData, getAllPersons, getPopularMovies };
