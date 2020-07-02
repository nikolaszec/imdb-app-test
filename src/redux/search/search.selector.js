import { createSelector } from "reselect";

const selectSearch = (state) => state.search;

export const selectAutoCompleteOptions = createSelector(
  [selectSearch],
  (search) => search.autoCompleteOptions
);

export const selectIsFetchingOptions = createSelector(
  [selectSearch],
  (search) => search.isFetching
);

export const selectOptionsAsObj = createSelector(
  [selectAutoCompleteOptions],
  (options) => {
    const mapped = options.map((item) => ({ [item.title]: item }));
    const obj = Object.assign({}, ...mapped);
    return obj;
  }
);
