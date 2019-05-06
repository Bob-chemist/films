import axios from 'axios';
import token from './APItoken';

export const Axios = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

const fetchDetails = async (section, id) => {
  try {
    const response = await Axios.get(
      `${section}/${id}?api_key=${token}&language=ru-RU`
    );
    console.log('response: ', response.data);

    return response.data;
  } catch (e) {
    console.log(e.message);
  }
};

export { fetchDetails };
