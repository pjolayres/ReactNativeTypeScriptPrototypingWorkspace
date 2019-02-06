import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './state/configureStore';
import Main from './screens/main';

const store = configureStore();

const App: React.FunctionComponent = () => {
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    );
}

export default App;
