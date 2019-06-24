import React, { useRef, useReducer, useEffect } from 'react';
import isEqual from 'lodash/isEqual';
import queryString from 'query-string';

import { API_KEY } from '../config/api-keys.js';
const FETCH_START = 'FETCH_START';
const FETCH_SUCCEDED = 'FETCH_SUCCEDED';
const FETCH_FAILED = 'FETCH_FAILED';

const fetchReducer = (state, action) => {
  switch (action.type) {
    case FETCH_START:
      return Object.assign({}, state, {
        loading: true
      });
    case FETCH_SUCCEDED:
      return Object.assign({}, state, {
        loading: false,
        res: action.data
      });
    case FETCH_FAILED:
      return Object.assign({}, state, {
        loading: false,
        res: {},
        error: action.error
      });
    default:
      throw new Error(`Bad action ${action.type} for fetchReducer reducer.`);
  }
};

const usePreviousValue = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export default function useFetch({ url, params, method = 'GET' }) {
  params = params || {};
  params = Object.assign({}, params, {
    api_key: API_KEY,
    language: 'en-US'
  });
  if (method === 'GET') {
    url = url + '?' + queryString.stringify(params);
  }
  const [state, dispatch] = useReducer(fetchReducer, {
    loading: false,
    error: false,
    res: {}
  });
  const oldParams = usePreviousValue(params);

  useEffect(
    () => {
      // Deep compare params
      if (isEqual(oldParams, params)) {
        return;
      }

      dispatch({
        type: FETCH_START
      });
      fetch(url, params)
        .then(res => res.json())
        .then(res => {
          dispatch({
            type: FETCH_SUCCEDED,
            data: res
          });
        })
        .catch(error => {
          dispatch({
            type: FETCH_FAILED,
            error: error
          });
        });
    },
    [url, params, oldParams]
  );
  const { loading, error, res } = state;
  return { loading, error, res };
}
