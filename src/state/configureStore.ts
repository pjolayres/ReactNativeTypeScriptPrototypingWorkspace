import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from './reducers';

const middleware: any[] = [thunk];

if (__DEV__) {
    const logger = createLogger();
    middleware.push(logger);
}

export default function configureStore() {
  const store = createStore(reducers, compose(applyMiddleware(...middleware)));

  return store;
}
