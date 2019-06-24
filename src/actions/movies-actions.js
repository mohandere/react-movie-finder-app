import axios from 'axios';
import { API_KEY } from '../config/api-keys';
import { MOVIE_CATEGORY_URL, MOVIE_CATEGORY } from '../config/constants.js';

export const SET_MOBILE_TYPE_RESPONSE = 'SET_MOBILE_TYPE_RESPONSE';
export const SET_SELECTED_MOVIE = 'SET_SELECTED_MOVIE';
export const CLEAR_SELECTED_MOVIE = 'CLEAR_SELECTED_MOVIE';

const setMobileResponse = (response, type) => dispatch => {
  return dispatch({
    type: SET_MOBILE_TYPE_RESPONSE,
    payload: {
      [type]: response
    }
  });
};

export const getMoviesByType = type => {
  return dispatch => {
    const url = MOVIE_CATEGORY_URL[type];
    return axios.get(`${url}${API_KEY}`).then(response => {
      dispatch(setMobileResponse(response.data, MOVIE_CATEGORY[type]));
    });
  };
};

export const setSelectedMovie = id => dispatch => {
  return dispatch({
    type: SET_SELECTED_MOVIE,
    payload: {
      selectedMovie: id
    }
  });
};

export const clearSelectedMovie = () => dispatch => {
  return dispatch({
    type: CLEAR_SELECTED_MOVIE
  });
};
