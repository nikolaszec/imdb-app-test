import { UserActionTypes } from "./user.types";
const INITIAL_STATE = {
  loading: false,
  favoriteMovies: [],
  error: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.USER_ACTION_START:
      return {
        ...state,
        loading: true,
      };
    case UserActionTypes.USER_ACTION_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UserActionTypes.GET_FAVORITE_MOVIES:
      return {
        ...state,
        loading: false,
        favoriteMovies: action.payload,
      };
    case UserActionTypes.ADD_MOVIE_TO_FAVORITES:
      return {
        ...state,
        favoriteMovies: [...state.favoriteMovies, action.payload],
        loading: false,
      };
    case UserActionTypes.REMOVE_MOVIE_FROM_FAVORITES:
      return {
        ...state,
        favoriteMovies: state.favoriteMovies.filter(
          (movie) => movie.id !== action.payload.id
        ),
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
