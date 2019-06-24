import {
  SET_ACTOR_FILMOGRAPHY,
  SET_ACTOR_DETAILS
} from '../actions/actor-actions';


export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ACTOR_DETAILS:
    case SET_ACTOR_FILMOGRAPHY:
      const newState = {
        ...state,
        ...payload
      };
      return newState;
    default:
      return state;
  }
};
