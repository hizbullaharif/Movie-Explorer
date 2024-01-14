import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {moviesApi} from '../Services/movies';

// slices
import favoriteMoviesReducer from '../slices/favoriteMoviesSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  favoriteMovies: favoriteMoviesReducer,
  [moviesApi.reducerPath]: moviesApi.reducer,
});

export default persistReducer(persistConfig, rootReducer);
