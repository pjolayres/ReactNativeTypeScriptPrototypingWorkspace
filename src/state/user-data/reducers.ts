import { SET_NAME, UserDataActionTypes, UserDataState } from './types';

const initialState: UserDataState = {
  name: 'temp'
};

export default function reducer(state = initialState, action: UserDataActionTypes): UserDataState {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
}
