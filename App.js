import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './src/redux/Store.js';
import Routes from './src/routes/routes.js';
import Toast from 'react-native-toast-message';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Routes />
      <Toast />
    </PersistGate>
  </Provider>
);

export default App;
