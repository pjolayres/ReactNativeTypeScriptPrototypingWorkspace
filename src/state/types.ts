import reducer from './reducers';
import { UserDataActionTypes, UserDataState } from './user-data/types';
import { AppDataActionTypes, AppDataState } from './app-data/types';

export type ReduxState = ReturnType<typeof reducer>;

export type ActionTypes = UserDataActionTypes | AppDataActionTypes;
