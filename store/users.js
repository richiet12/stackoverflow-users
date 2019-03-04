import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import camelcaseKeys from 'camelcase-keys';

import getUsersService from '../services/users';

import mockUsers from './mock-response';

export const exampleInitialState = {
  isLoading: false,
  users: mockUsers.items
};

// Action types
export const types = {
  REQUEST_SENT: 'users/REQUEST_SENT',
  REQUEST_ERROR: 'users/REQUEST_ERROR',
  REQUEST_SUCCESS: 'users/ REQUEST_SUCCESS'
};

// Actions
export const getUsers = () => async (dispatch, getState) => {
  dispatch({
    type: types.REQUEST_SENT
  });
  console.log('call');
  try {
    const { items } = await getUsersService();
    console.log('users');
    // console.log(items);
    console.log(camelcaseKeys([{ foo_bar: true }, { 'bar-foo': false }]));
    // console.log(res);
    // const { items } = await res.json();
    // console.log(items.length);
    console.log(items[0]);
    // console.log(camelcaseKeys(items));
    dispatch({
      type: types.REQUEST_SUCCESS,
      payload: camelcaseKeys(items)
    });
  } catch (e) {
    console.log('error');
    // console.log(e);

    dispatch({
      type: types.REQUEST_ERROR
    });
  }
};

// REDUCERS
export const reducer = (state = exampleInitialState, { type, payload }) => {
  switch (type) {
    case types.REQUEST_SUCCESS: {
      console.log('payload');
      // console.log(state);
      return {
        ...state,
        users: payload
      };
    }
    default:
      return state;
  }
};
// const rootReducer = combineReducers({ reducer });
export function initializeStore(initialState = exampleInitialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}
