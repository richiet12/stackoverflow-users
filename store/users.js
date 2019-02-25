import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const exampleInitialState = {
  isLoading: false,
  users: ['1', '2']
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
