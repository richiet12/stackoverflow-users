import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import camelcaseKeys from 'camelcase-keys';

import getUsersService from '../services/users';

export const exampleInitialState = {
  isLoading: false,
  users: [],
  isError: false
};

// Action types
export const types = {
  REQUEST_SENT: 'users/REQUEST_SENT',
  REQUEST_ERROR: 'users/REQUEST_ERROR',
  REQUEST_SUCCESS: 'users/REQUEST_SUCCESS'
};

// Actions
export const getUsers = () => async dispatch => {
  dispatch({
    type: types.REQUEST_SENT
  });
  try {
    const { items } = await getUsersService();
    dispatch({
      type: types.REQUEST_SUCCESS,
      payload: camelcaseKeys(items)
    });
  } catch (e) {
    dispatch({
      type: types.REQUEST_ERROR
    });
  }
};

// REDUCERS
export const reducer = (state = exampleInitialState, { type, payload }) => {
  switch (type) {
    case types.REQUEST_SENT: {
      return {
        ...state,
        isLoading: true
      };
    }
    case types.REQUEST_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    }
    case types.REQUEST_SUCCESS: {
      return {
        ...state,
        users: payload,
        isLoading: false,
        isError: false
      };
    }
    default:
      return state;
  }
};

export function initializeStore(initialState = exampleInitialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}
