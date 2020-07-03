import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { TextField, Button, Link } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  fetchAutoCompleteAsync,
  clearAutoCompleteOpts,
} from "../../redux/search/search.actions";
import searchBarStyles from "./search-bar.styles";
import {
  selectOptionsAsObj,
  selectIsFetchingOptions,
} from "../../redux/search/search.selector";
import AutoCompleteOption from "../auto-complete-option/auto-complete-option.component";

const SearchBar = ({
  fetchAutoCompleteAsync,
  clearAutoCompleteOptions,
  options,
  isFetchingOptions,
}) => {
  const router = useRouter();
  const classes = searchBarStyles();

  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (query.length > 2) {
      fetchAutoCompleteAsync(query);
    }
    return () => {
      if (query.length < 2) {
        clearAutoCompleteOptions();
      }
    };
  }, [query]);

  const handleSelectedMovie = (event, value) => {
    if (query.length > 2 && options[value] !== undefined) {
      router.push("/movie/[slug]", `/movie/${options[value].id}`);
    } else {
      clearAutoCompleteOptions();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.length > 2) {
      router.push("/movies/[slug]", `/movies/search_query=${query}`);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Autocomplete
          className={classes.autoComplete}
          loading={isFetchingOptions}
          noOptionsText={"No results"}
          fullWidth
          clearOnBlur={false}
          id="free-solo"
          onChange={handleSelectedMovie}
          options={Object.keys(options).map((key) => key)}
          renderOption={(option, { selected }) => {
            return Object.keys(options).length >= 1 ? (
              <AutoCompleteOption
                imagePath={options[option].poster_path}
                title={options[option].title}
              />
            ) : (
              <span>No movies found</span>
            );
          }}
          renderInput={(params) => (
            <div className={classes.searchInputWrapper}>
              <TextField
                value={query}
                onChange={handleChange}
                {...params}
                label="Search"
                margin="normal"
                variant="filled"
                fullWidth
                InputProps={{ ...params.InputProps, type: "text" }}
              />
              <Button className={classes.submitBtn} type="submit">
                <SearchIcon />
              </Button>
            </div>
          )}
        />
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearAutoCompleteOptions: () => dispatch(clearAutoCompleteOpts()),
    fetchAutoCompleteAsync: (query) => dispatch(fetchAutoCompleteAsync(query)),
  };
};

const mapStateToProps = createStructuredSelector({
  options: selectOptionsAsObj,
  isFetchingOptions: selectIsFetchingOptions,
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
