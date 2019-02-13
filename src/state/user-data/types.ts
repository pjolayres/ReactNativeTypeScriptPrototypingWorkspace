export const SET_NAME = 'SET_NAME';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export interface SetNameAction {
  type: typeof SET_NAME;
  name: string;
}

export interface LoginAction {
  type: typeof LOGIN;
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export type UserDataActionTypes = SetNameAction | LoginAction | LogoutAction;

export interface UserDataState {
  name: string;
  isLoggedIn: boolean;
}
