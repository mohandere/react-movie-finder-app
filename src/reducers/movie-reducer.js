import {
  START_MOVIE_REQUEST,
  MOVIE_REQUEST_SUCCEDDED,
  MOVIE_REQUEST_FAILED
} from '../actions/movie-actions';

let initialState = {
  isFetching: false,
  info: {},
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_MOVIE_REQUEST:
      return Object.assign(
        {},
        {
          ...state,
          isFetching: true
        }
      );

    case MOVIE_REQUEST_SUCCEDDED:
      return Object.assign(
        {},
        {
          ...state,
          isFetching: false,
          info: action.payload,
          error: null
        }
      );

    case MOVIE_REQUEST_FAILED:
      return {
        ...state,
        isFetching: false,
        error: null
      };
    default:
      return state;
  }
};
