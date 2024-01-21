// favoriteMoviesSlice.js

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  favoriteMovies: [],
};

const favoriteMoviesSlice = createSlice({
  name: 'favoriteMovies',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const movie = action.payload;
      const isExist = state.favoriteMovies?.some(
        movie_ => movie_.id == movie.id,
      );
      if (!isExist) {
        state.favoriteMovies.push(movie);
      } else {
        state.favoriteMovies = state.favoriteMovies.filter(
          movie_ => movie_.id !== movie.id,
        );
      }
    },
  },
});

export const {addToFavorites, removeFromFavorites} =
  favoriteMoviesSlice.actions;
export default favoriteMoviesSlice.reducer;
