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
    let data = await response;
    console.log('response: ', data);

    return data.data;
  } catch (e) {
    console.log(e.message);
  }
};

const getData = async () => await console.log(fetchDetails('tv', '1399'));

export { fetchDetails, getData };
