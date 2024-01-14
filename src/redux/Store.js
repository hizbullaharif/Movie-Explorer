import {configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';

import RootReducer from './rootReducer/RootReducer.js';
import {moviesApi} from './Services/movies.js';

const store = configureStore({
  reducer: RootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      moviesApi.middleware,
    ),
});

const persister = persistStore(store);

export {store, persister as persistor};
