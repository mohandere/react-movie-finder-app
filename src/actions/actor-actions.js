import { API_KEY } from '../config/api-keys';

export const SET_ACTOR_DETAILS = 'SET_MOBILE_TYPE_RESPONSE';
export const SET_ACTOR_FILMOGRAPHY = 'SET_ACTOR_FILMOGRAPHY';

const setActorDetails = data => dispatch => {
  return dispatch({
    type: SET_ACTOR_DETAILS,
    payload: {
      actor: data
    }
  });
};

export const getActorDetails = personId => {
  return dispatch => {
    const url = `https://api.themoviedb.org/3/person/${personId}?api_key=${API_KEY}&language=en-US`;
    return fetch(url)
      .then(response => response.json())
      .then(response => dispatch(setActorDetails(response)));
  };
};

const setActorFilmography = data => dispatch => {
  return dispatch({
    type: SET_ACTOR_FILMOGRAPHY,
    payload: {
      filmography: data
    }
  });
};

export const getActorFilmography = personId => {
  return dispatch => {
    const url = `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${API_KEY}&language=en-US`;
    return fetch(url)
      .then(response => response.json())
      .then(response => dispatch(setActorFilmography(response)));
  };
};
