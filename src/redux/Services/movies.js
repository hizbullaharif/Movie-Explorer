import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const URL = 'https://api.themoviedb.org/3/movie';
const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTA2ZmRmMjVmZmZlMzk4Y2VlZWQ0OWRhZTY1NmE4YSIsInN1YiI6IjYyNWNmZjMxYTI4NGViMTQzOWEzODdjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6fDl3qBby-8GvMi9x-WSQe2xajfmbsQVIpsEjLJIUTs';
// Create the moviesApi using createApi from RTK Query
export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  // Configure the base query with the base URL and headers
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
    prepareHeaders: headers => {
      headers.set('authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ['latest', 'popular'],
  endpoints: builder => ({
    // Query to get popular movies
    getPopularMovies: builder.query({
      query: () => `/popular?language=en-US&page=1`,
      // Refetch data on mount or when arguments change
      refetchOnMountOrArgChange: true,
    }),
    // Query to get movie by ID
    getMovieById: builder.query({
      query: Id => `/${Id}`,
    }),
    // Query to get latest movies
    getMovieByLatest: builder.query({
      query: () => `/upcoming?language=en-US&page=1`,
    }),
  }),
});

// Export hooks for each endpoint for use in React components
export const {
  useGetMovieByIdQuery,
  useGetPopularMoviesQuery,
  useGetMovieByLatestQuery,
} = moviesApi;
