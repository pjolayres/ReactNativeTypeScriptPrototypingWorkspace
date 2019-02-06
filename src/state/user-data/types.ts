export const SET_NAME = 'SET_NAME';

export interface SetNameAction {
  type: typeof SET_NAME;
  name: string;
}

export type UserDataActionTypes = SetNameAction;

export interface UserDataState {
  name: string;
}
