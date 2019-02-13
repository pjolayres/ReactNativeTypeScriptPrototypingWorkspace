import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createEncryptor from 'redux-persist-transform-encrypt';
import DeviceInfo from 'react-native-device-info';

import reducers from './reducers';

declare var process: {
  env: {
    NODE_ENV: string;
  };
};

const middleware: any[] = [thunk];

if (__DEV__ && process.env.NODE_ENV !== 'test') {
  const logger = createLogger();
  middleware.push(logger);
}

const encryptor = createEncryptor({
  secretKey: DeviceInfo.getUniqueID()
});

const persistConfig = {
  key: `app-state-v1`,
  storage,
  transforms: [encryptor]
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, compose(applyMiddleware(...middleware)));

export const persistor = persistStore(store);
