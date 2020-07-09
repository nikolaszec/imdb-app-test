import { MoviesActionTypes } from "./movies.types";
const INITIAL_STATE = {
  moviesByCategory: [],
  movieDetails: {},
  isFetching: false,
  isFetchingMore: false,
  error: "",
  totalPages: 0,
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MoviesActionTypes.FETCH_MOVIES_START:
      return {
        ...state,
        isFetching: true,
      };
    case MoviesActionTypes.FETCH_MORE_MOVIES_START:
      return {
        ...state,
        isFetchingMore: true,
      };
    case MoviesActionTypes.FETCH_MOVIES_INITIAL:
      return {
        ...state,
        moviesByCategory: action.payload,
        isFetching: false,
      };
    case MoviesActionTypes.FETCH_MORE_MOVIES:
      return {
        ...state,
        moviesByCategory: [...state.moviesByCategory, ...action.payload],
        isFetchingMore: false,
      };
    case MoviesActionTypes.FETCH_MOVIES_FAILED:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case MoviesActionTypes.FETCH_MOVIE_DETAILS_START:
      return {
        ...state,
        isFetching: true,
      };
    case MoviesActionTypes.FETCH_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movieDetails: action.payload,
        isFetching: false,
      };

    case MoviesActionTypes.FETCH_MOVIE_DETAILS_FAILED:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case MoviesActionTypes.SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload,
      };
    default:
      return state;
  }
};

export default moviesReducer;
