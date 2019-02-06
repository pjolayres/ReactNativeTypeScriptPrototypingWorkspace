import { SET_VERSION, AppDataActionTypes, AppDataState } from './types';

const initialState: AppDataState = {
  version: '1.0.0'
};

export default function reducer(state = initialState, action: AppDataActionTypes): AppDataState {
  switch (action.type) {
    case SET_VERSION:
      return {
        ...state,
        version: action.version
      };
    default:
      return state;
  }
}
