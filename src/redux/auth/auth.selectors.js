import { createSelector } from "reselect";

const selectAuth = (state) => state.auth;

export const selectIsAuth = createSelector([selectAuth], (auth) => auth.isAuth);

export const selectError = createSelector([selectAuth], (auth) => auth.error);
