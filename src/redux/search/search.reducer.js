import { SearchActionTypes } from "./search.types";
const INITIAL_STATE = {
  autoCompleteOptions: [],
  isFetching: false,
  error: "",
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchActionTypes.CLEAR_AUTOCOMPLETE_OPTIONS:
      return {
        ...state,
        autoCompleteOptions: [],
      };
    case SearchActionTypes.FETCH_AUTOCOMPLETE_START:
      return {
        ...state,
        isFetching: true,
      };
    case SearchActionTypes.FETCH_AUTOCOMPLETE_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case SearchActionTypes.FETCH_AUTOCOMPLETE_OPTIONS_SUCCESS:
      return {
        ...state,
        autoCompleteOptions: [...action.payload],
        isFetching: false,
      };
    default:
      return state;
  }
};

export default searchReducer;
