import { createSelector } from "reselect";

const selectMoviesState = (state) => state.movies;

export const selectMovies = createSelector(
  [selectMoviesState],
  (movies) => movies.moviesByCategory
);
export const selectTotalPages = createSelector(
  [selectMoviesState],
  (movies) => movies.totalPages
);
export const selectMovieDetails = createSelector(
  [selectMoviesState],
  (movies) => movies.movieDetails
);

export const selectIsFetching = createSelector(
  [selectMoviesState],
  (movies) => movies.isFetching
);

export const selectIsFetchingMore = createSelector(
  [selectMoviesState],
  (movies) => movies.isFetchingMore
);
