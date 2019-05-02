import {
  FETCH_CONTENT_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_CONTENT_ERROR,
  FETCH_TVSHOWS_SUCCESS,
} from './actionTypes';
import axios from 'axios';
import token from '../../API/APItoken';
import { fromMovies } from '../../utils/prepareData';

export function fetchPopular(section) {
  return async dispatch => {
    dispatch(fetchContentStart());
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${section}/popular?api_key=${token}&language=ru-RU`
      );
      console.log(response);

      const popular = response.data.results;
      if (section === 'movie') {
        const movies = fromMovies(popular);
        dispatch(fetchMoviesSuccess(movies));
      } else if (section === 'tv') {
        dispatch(fetchTVShowsSuccess(popular));
      }
    } catch (e) {
      dispatch(fetchContentError(e.message));
    }
  };
}

export function fetchContentStart() {
  return {
    type: FETCH_CONTENT_START,
  };
}

export function fetchMoviesSuccess(movies) {
  return {
    type: FETCH_MOVIES_SUCCESS,
    movies,
  };
}

export function fetchTVShowsSuccess(tvShows) {
  console.log(tvShows);

  return {
    type: FETCH_TVSHOWS_SUCCESS,
    tvShows,
  };
}
export function fetchContentError(error) {
  return {
    type: FETCH_CONTENT_ERROR,
    error: error,
  };
}
