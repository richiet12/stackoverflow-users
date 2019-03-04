import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { types, reducer, getUsers } from './users';

import getUsersService from '../services/users';

jest.mock('../services/users');

// const { types } = usersStore;

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Module | Users', () => {
  /*
   * Actions
   */
  describe('Actions', () => {
    describe('Given the get users call is successful', () => {
      it('should get users', async () => {
        getUsersService.mockImplementation(() => {
          return { items: [] };
        });
        const store = mockStore({});

        await store.dispatch(getUsers({}));

        const expectedActions = [
          { type: 'users/REQUEST_SENT' },
          { type: 'users/REQUEST_SUCCESS', payload: [] }
        ];

        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    describe('Given the get users call is unsuccessful', () => {
      it('should get users', async () => {
        getUsersService.mockImplementation(() => {
          return {};
        });
        const store = mockStore({});

        await store.dispatch(getUsers({}));

        const expectedActions = [{ type: 'users/REQUEST_SENT' }, { type: 'users/REQUEST_ERROR' }];

        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  /*
   * Reducer
   */
  describe('Reducer', () => {
    const initialState = {
      isLoading: false,
      users: [],
      isError: false
    };

    it('should handle REQUEST_SENT', () => {
      const action = {
        type: types.REQUEST_SENT
      };

      const expectedResult = {
        isLoading: true,
        users: [],
        isError: false
      };

      expect(reducer(initialState, action)).toEqual(expectedResult);
    });

    it('should handle REQUEST_SUCCESS', () => {
      const action = {
        type: types.REQUEST_SUCCESS,
        payload: [{ displayName: 'Alice' }]
      };

      const expectedResult = {
        isLoading: false,
        users: [{ displayName: 'Alice' }],
        isError: false
      };

      expect(reducer(initialState, action)).toEqual(expectedResult);
    });

    it('should handle REQUEST_ERROR', () => {
      const action = {
        type: types.REQUEST_ERROR
      };

      const expectedResult = {
        isLoading: false,
        users: [],
        isError: true
      };

      expect(reducer(initialState, action)).toEqual(expectedResult);
    });
  });
});
