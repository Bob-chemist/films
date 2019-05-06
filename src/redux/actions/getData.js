import {
  FETCH_CONTENT_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_CONTENT_ERROR,
  FETCH_TVSHOWS_SUCCESS,
  FETCH_PERSONS_SUCCESS,
  FETCH_HOMEPAGE_SUCCESS,
  FETCH_DETAILS_SUCCESS,
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

export function fetchDetails(section, id) {
  return async dispatch => {
    dispatch(fetchContentStart());
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${section}/${id}?api_key=${token}&language=ru-RU`
      );
      const details = response.data;
      dispatch(fetchDetailsSuccess(details));
    } catch (e) {
      dispatch(fetchContentError(e.message));
    }
  };
}

function fetchDetailsSuccess(details) {
  return {
    type: FETCH_DETAILS_SUCCESS,
    details,
  };
}

export function fetchHomePage() {
  return async dispatch => {
    dispatch(fetchContentStart());
    try {
      const moviesResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${token}&language=ru-RU`
      );
      const tvShowsResponse = await axios.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${token}&language=ru-RU`
      );
      const personsResponse = await axios.get(
        `https://api.themoviedb.org/3/person/popular?api_key=${token}&language=ru-RU`
      );

      const movies = moviesResponse.data.results.map(_transformMovies);
      const tvShows = tvShowsResponse.data.results.map(_transformTvShow);
      const persons = personsResponse.data.results.map(_transformPersons);

      dispatch(fetchHomePageSuccess(movies, tvShows, persons));
    } catch (e) {
      dispatch(fetchContentError(e.message));
    }
  };
}

export function fetchHomePageSuccess(movies = [], tvShows = [], persons = []) {
  return {
    type: FETCH_HOMEPAGE_SUCCESS,
    movies,
    tvShows,
    persons,
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
