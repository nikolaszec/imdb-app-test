import { UserActionTypes } from "./user.types";
import axios from "../../../config/axios";

export const userActionStart = () => {
  return {
    type: UserActionTypes.USER_ACTION_START,
  };
};

export const userActionFailed = () => {
  return {
    type: UserActionTypes.USER_ACTION_FAILED,
  };
};

export const getFavoriteMovies = (favoriteMovies) => {
  return {
    type: UserActionTypes.GET_FAVORITE_MOVIES,
    payload: favoriteMovies,
  };
};

export const addMovieToFavorites = (movieToAdd) => {
  return {
    type: UserActionTypes.ADD_MOVIE_TO_FAVORITES,
    payload: movieToAdd,
  };
};

export const removeMovieFromFavorites = (movieToRemove) => {
  return {
    type: UserActionTypes.REMOVE_MOVIE_FROM_FAVORITES,
    payload: movieToRemove,
  };
};

export const addMovieToFavoritesAsync = (movie) => {
  return async (dispatch, getState) => {
    dispatch(userActionStart());
    try {
      const response = await axios.post(
        `/account/{ID}/favorite`,
        {
          media_type: "movie",
          media_id: movie.id,
          favorite: true,
        },
        {
          params: {
            session_id: getState().auth.sessionId,
          },
        }
      );

      if (response.status === 201) {
        dispatch(addMovieToFavorites(movie));
      }
    } catch (error) {
      dispatch(userActionFailed(error.response.data.status_message));
    }
  };
};

export const removeMovieFromFavoritesAsync = (movie) => {
  return async (dispatch, getState) => {
    dispatch(userActionStart());
    try {
      const response = await axios.post(
        `/account/{ID}/favorite`,
        {
          media_type: "movie",
          media_id: movie.id,
          favorite: false,
        },
        {
          params: {
            session_id: getState().auth.sessionId,
          },
        }
      );

      if (response.status === 200) {
        dispatch(removeMovieFromFavorites(movie));
      }
    } catch (error) {
      dispatch(userActionFailed(error.response.data.status_message));
    }
  };
};
export const getFavoriteMoviesAsync = () => {
  return async (dispatch, getState) => {
    dispatch(userActionStart());
    try {
      const response = await axios.get(
        `/account/{account_id}/favorite/movies`,
        {
          params: {
            session_id: getState().auth.sessionId,
          },
        }
      );

      if (response.status === 200) {
        dispatch(getFavoriteMovies(response.data.results));
      }
    } catch (error) {
      dispatch(userActionFailed(error.response.data.status_message));
    }
  };
};
