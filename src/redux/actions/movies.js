import {
  FETCH_CONTENT_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_CONTENT_ERROR,
  FETCH_TVSHOWS_SUCCESS,
  FETCH_PERSONS_SUCCESS,
} from './actionTypes';
import axios from 'axios';
import token from '../../API/APItoken';
import {
  _transformMovies,
  _transformPersons,
  _transformTvShow,
} from '../../utils/prepareData';

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
        const movies = popular.map(_transformMovies);
        dispatch(fetchMoviesSuccess(movies));
      } else if (section === 'tv') {
        const tvShows = popular.map(_transformTvShow);
        dispatch(fetchTVShowsSuccess(tvShows));
      } else if (section === 'person') {
        const persons = popular.map(_transformPersons);
        dispatch(fetchPersonsSuccess(persons));
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
  return {
    type: FETCH_TVSHOWS_SUCCESS,
    tvShows,
  };
}
export function fetchPersonsSuccess(persons) {
  return {
    type: FETCH_PERSONS_SUCCESS,
    persons,
  };
}
export function fetchContentError(error) {
  return {
    type: FETCH_CONTENT_ERROR,
    error: error,
  };
}
