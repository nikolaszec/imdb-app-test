import { MoviesActionTypes } from "./movies.types";
import axios from "../../../config/axios";

export const fetchMoviesInitial = (results) => {
  return {
    type: MoviesActionTypes.FETCH_MOVIES_INITIAL,
    payload: results,
  };
};

export const fetchMoreMovies = (results) => {
  return {
    type: MoviesActionTypes.FETCH_MORE_MOVIES,
    payload: results,
  };
};

export const fetchMoviesStart = () => ({
  type: MoviesActionTypes.FETCH_MOVIES_START,
});
export const fetchMoreMoviesStart = () => ({
  type: MoviesActionTypes.FETCH_MORE_MOVIES_START,
});

export const fetchMoviesFailed = (errorMessage) => ({
  type: MoviesActionTypes.FETCH_MOVIES_FAILED,
  payload: errorMessage,
});

export const fetchMoviesAsync = (page = 1, category) => {
  return async (dispatch) => {
    if (page > 1) {
      dispatch(fetchMoreMoviesStart());
    } else {
      dispatch(fetchMoviesStart());
    }

    try {
      let apiRequest = `/movie/${category}`;
      let config = {
        params: {
          page: page,
        },
      };
      let query = "";
      if (category.split("=")[0] === "search_query") {
        query = category.split("=")[1];
        apiRequest = `/search/movie`;
        config = {
          params: {
            page: page,
            query: query,
          },
        };
      }
      const response = await axios.get(apiRequest, config);

      if (response) {
        if (page > 1) {
          dispatch(fetchMoreMovies(response.data.results));
        } else {
          dispatch(fetchMoviesInitial(response.data.results));
        }
      }
    } catch (error) {
      dispatch(fetchMoviesFailed(error.response.data.status_message));
    }
  };
};

//FETCHING MOVIE DETAILS
export const fetchMovieDetailsStart = () => ({
  type: MoviesActionTypes.FETCH_MOVIE_DETAILS_START,
});

export const fetchMovieDetailsSuccess = (movieDetails) => ({
  type: MoviesActionTypes.FETCH_MOVIE_DETAILS_SUCCESS,
  payload: movieDetails,
});
export const fetchMovieDetailsFailed = (error) => ({
  type: MoviesActionTypes.FETCH_MOVIE_DETAILS_FAILED,
  payload: error,
});

export const fetchMovieDetailsAsync = (movieId) => {
  return async (dispatch) => {
    dispatch(fetchMovieDetailsStart());
    try {
      const response = await axios.get(`/movie/${movieId}`);

      if (response.status === 200) {
        dispatch(fetchMovieDetailsSuccess(response.data));
      }
    } catch (error) {
      dispatch(fetchMovieDetailsFailed(error.response.data.status_message));
    }
  };
};
