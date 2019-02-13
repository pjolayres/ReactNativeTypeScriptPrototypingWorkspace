import { SET_NAME, UserDataActionTypes, UserDataState, LOGIN, LOGOUT } from './types';

const initialState: UserDataState = {
  name: 'temp',
  isLoggedIn: false
};

export default function reducer(state = initialState, action: UserDataActionTypes): UserDataState {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.name
      };
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false
      };
    default:
      return state;
  }
}
