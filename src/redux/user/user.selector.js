import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectIsLoading = createSelector(
  [selectUser],
  (user) => user.loading
);

export const selectUserFavorites = createSelector(
  [selectUser],
  (user) => user.favoriteMovies
);

export const selectIsUserFavorite = createSelector(
  [selectUser],
  (user, props) => user.favoriteMovies.find((movie) => movie.id === props.id)
);
