import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import mockUsers from './mock-response';

const exampleInitialState = {
  isLoading: false,
  users: mockUsers.items
};

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch ('') {
    default:
      return state;
  }
};

export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
    // applyMiddleware(thunkMiddleware)
  );
}
