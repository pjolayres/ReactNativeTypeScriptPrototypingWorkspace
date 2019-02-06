import reducer from './reducers';
import { UserDataActionTypes } from './user-data/types';
import { AppDataActionTypes } from './app-data/types';

export type ReduxState = ReturnType<typeof reducer>;

export type ActionTypes = UserDataActionTypes | AppDataActionTypes;
