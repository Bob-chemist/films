import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
} from '../actions/actionTypes';

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

export default function moviesReducer(state = initialState, actions) {
  switch (actions.type) {
    case FETCH_MOVIES_START:
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
    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: actions.error,
      };

    default:
      return state;
  }
}
