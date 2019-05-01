import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
} from './actionTypes';
import axios from 'axios';

export function fetchMovies() {
  return async dispatch => {
    dispatch(fetchMoviesStart());
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/movie/popular?api_key=75a419ad08c7eece5794d527cd189f28&language=ru-RU'
      );

      const popular = response.data.results;
      dispatch(fetchMoviesSuccess(popular));
    } catch (e) {
      dispatch(fetchMoviesError(e.message));
    }
  };
}

export function fetchMoviesStart() {
  return {
    type: FETCH_MOVIES_START,
  };
}

export function fetchMoviesSuccess(movies) {
  return {
    type: FETCH_MOVIES_SUCCESS,
    movies,
  };
}
export function fetchMoviesError(error) {
  return {
    type: FETCH_MOVIES_ERROR,
    error: error,
  };
}
