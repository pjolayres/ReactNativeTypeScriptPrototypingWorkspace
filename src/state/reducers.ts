import { combineReducers } from 'redux';

import userData from './user-data/reducers';
import appData from './app-data/reducers';

const reducer = combineReducers({
  userData,
  appData
});

export default reducer;
