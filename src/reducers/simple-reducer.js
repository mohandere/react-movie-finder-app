import { SIMPLE_ACTION } from '../actions/simple-action';

export default (state = {}, action) => {
  switch (action.type) {
    case SIMPLE_ACTION:
      return {
        result: action.payload
      };

    default:
      return state;
  }
};
