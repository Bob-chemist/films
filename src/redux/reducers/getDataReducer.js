import {
  FETCH_CONTENT_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_TVSHOWS_SUCCESS,
  FETCH_CONTENT_ERROR,
  FETCH_PERSONS_SUCCESS,
  FETCH_HOMEPAGE_SUCCESS,
  FETCH_DETAILS_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  movies: [],
  tvShows: [],
  persons: [],
  loading: true,
  error: null,
  details: {
    title: '',
    genres: [],
    homepage: '',
    overview: '',
    runtime: 0,
    backdrop_path: '',
  },
};

export default function getDataReducer(state = initialState, actions) {
  switch (actions.type) {
    case FETCH_CONTENT_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: actions.movies,
      };
    case FETCH_TVSHOWS_SUCCESS:
      return {
        ...state,
        loading: false,
        tvShows: actions.tvShows,
      };
    case FETCH_PERSONS_SUCCESS:
      return {
        ...state,
        loading: false,
        persons: actions.persons,
      };
    case FETCH_HOMEPAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: actions.movies,
        tvShows: actions.tvShows,
        persons: actions.persons,
      };
    case FETCH_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        details: actions.details,
      };
    case FETCH_CONTENT_ERROR:
      return {
        ...state,
        loading: false,
        error: actions.error,
      };

    default:
      return state;
  }
}
