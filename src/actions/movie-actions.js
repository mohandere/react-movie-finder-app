import queryString from 'query-string';
import { API_KEY } from '../config/api-keys';
export const START_MOVIE_REQUEST = 'START_MOVIE_REQUEST';
export const MOVIE_REQUEST_SUCCEDDED = 'MOVIE_REQUEST_SUCCEDDED';
export const MOVIE_REQUEST_FAILED = 'MOVIE_REQUEST_FAILED';

const requestMovie = movieId => dispatch => {
  return dispatch({
    type: START_MOVIE_REQUEST,
    movieId
  });
};

const receiveMovie = movieInfo => dispatch => {
  return dispatch({
    type: MOVIE_REQUEST_SUCCEDDED,
    payload: movieInfo
  });
};

export function fetchMovie(movieId) {
  return function(dispatch) {
    dispatch(requestMovie(movieId));
    let params = queryString.stringify({
      api_key: API_KEY,
      language: 'en-US',
      append_to_response: 'credits'
    });
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}?${params}`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => dispatch(receiveMovie(json)));
  };
}
