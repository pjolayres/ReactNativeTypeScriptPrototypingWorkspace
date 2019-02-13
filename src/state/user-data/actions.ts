import { ActionCreator, Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { ReduxState } from '../types';

import { SET_NAME, SetNameAction, LOGIN, LOGOUT, UserDataState } from './types';

export const setName: ActionCreator<SetNameAction> = (name: string) => ({
  type: SET_NAME,
  name
});

const loginAsync: (username: string, password: string) => Promise<boolean> = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'user' && password === 'pass') {
        resolve(true);
        return;
      }

      reject('Invalid username and password');
    }, 1000);
  });
};

export const login: ActionCreator<ThunkAction<Promise<boolean>, ReduxState, {}, Action>> = (username: string, password: string) => {
  return async dispatch => {
    try {
      const result = await loginAsync(username, password);

      dispatch({ type: LOGIN });

      return result;
    } catch (ex) {
      throw ex;
    }
  };
};

export const logout: ActionCreator<ThunkAction<void, ReduxState, {}, Action>> = () => {
  return (dispatch, getState) => {
    const { userData } = getState();
    const { isLoggedIn } = userData;

    if (isLoggedIn) {
      dispatch({ type: LOGOUT });
    }
  };
};
