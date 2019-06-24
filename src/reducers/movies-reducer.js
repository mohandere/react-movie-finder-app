import {
  SET_MOBILE_TYPE_RESPONSE,
  CLEAR_SELECTED_MOVIE,
  SET_SELECTED_MOVIE
} from '../actions/movies-actions';

export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SELECTED_MOVIE:
    case SET_MOBILE_TYPE_RESPONSE:
      const newState = {
        ...state,
        ...payload
      };
      return newState;
    case CLEAR_SELECTED_MOVIE:
      const { selectedMovie, ...restState } = state;
      return restState;
    default:
      return state;
  }
};
