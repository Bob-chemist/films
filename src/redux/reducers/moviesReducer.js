import {
  FETCH_CONTENT_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_TVSHOWS_SUCCESS,
  FETCH_CONTENT_ERROR,
  FETCH_PERSONS_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  movies: [],
  tvShows: [],
  persons: [],
  loading: false,
  error: null,
};

export default function moviesReducer(state = initialState, actions) {
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
