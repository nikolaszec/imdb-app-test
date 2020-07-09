import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchMoviesAsync } from "../../redux/movies/movies.actions";
import ItemList from "../item-list/item-list.component";
import { Button, Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import itemsContainerStyles from "./items.container.styles";
import {
  selectMovies,
  selectIsFetching,
  selectIsFetchingMore,
  selectTotalPages,
} from "../../redux/movies/movies.selectors";

const ItemsContainer = ({
  slug,
  isFetchingMore,
  isFetchingInitial,
  movies,
  fetchMoviesAsync,
  totalPages,
}) => {
  const [page, setPage] = useState(1);
  const classes = itemsContainerStyles();

  useEffect(() => {
    fetchMoviesAsync(1, slug);
    return () => {
      setPage(1);
    };
  }, [slug]);

  useEffect(() => {
    if (page > 1) {
      fetchMoviesAsync(page, slug);
    }
  }, [page]);

  return (
    <div className={classes.container}>
      {isFetchingInitial ? (
        <CircularProgress />
      ) : (
        <React.Fragment>
          {movies.length < 1 ? (
            <Typography color="primary" variant="h4">
              No movies found.
            </Typography>
          ) : (
            <React.Fragment>
              <ItemList list={movies} />
              <div className={classes.actionsWrapper}>
                {isFetchingMore ? (
                  <CircularProgress />
                ) : movies.length > 19 && totalPages !== page ? (
                  <Button
                    fullWidth
                    color="primary"
                    variant="contained"
                    onClick={() => setPage(page + 1)}
                  >
                    Load More
                  </Button>
                ) : null}
              </div>
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMoviesAsync: (page, slug) => dispatch(fetchMoviesAsync(page, slug)),
  };
};

const mapStateToProps = createStructuredSelector({
  totalPages: selectTotalPages,
  movies: selectMovies,
  isFetchingInitial: selectIsFetching,
  isFetchingMore: selectIsFetchingMore,
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
