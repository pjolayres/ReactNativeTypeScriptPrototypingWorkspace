import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { store, persistor } from './state/configureStore';
import Main from './screens/main';
import { AppContainer } from './navigation';

Icon.loadFont();

const App: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
