import { SearchActionTypes } from "./search.types";
import axios from "../../../config/axios";

export const clearAutoCompleteOpts = () => {
  return {
    type: SearchActionTypes.CLEAR_AUTOCOMPLETE_OPTIONS,
  };
};

export const fetchAutoCompleteOptsSuccess = (options) => {
  return {
    type: SearchActionTypes.FETCH_AUTOCOMPLETE_OPTIONS_SUCCESS,
    payload: options,
  };
};

export const fetchAutoCompleteStart = () => {
  return {
    type: SearchActionTypes.FETCH_AUTOCOMPLETE_START,
  };
};
export const fetchAutoCompleteFailed = () => {
  return {
    type: SearchActionTypes.FETCH_AUTOCOMPLETE_FAILED,
  };
};

export const fetchAutoCompleteAsync = (query) => {
  return async (dispatch) => {
    dispatch(fetchAutoCompleteStart());
    try {
      const response = await axios.get(`/search/movie`, {
        params: {
          query,
        },
      });

      if (response.status === 200) {
        dispatch(fetchAutoCompleteOptsSuccess(response.data.results));
      }
    } catch (error) {
      dispatch(fetchAutoCompleteFailed(error.response.data.status_message));
    }
  };
};
