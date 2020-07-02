import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Typography, CircularProgress } from "@material-ui/core";
import ItemList from "../item-list/item-list.component";
import { getFavoriteMoviesAsync } from "../../redux/user/user.actions";
import {
  selectUserFavorites,
  selectIsLoading,
} from "../../redux/user/user.selector";
import { selectIsAuth } from "../../redux/auth/auth.selectors";
import favoritesContainerStyles from "./favorites-container.styles";

const FavoritesContainer = ({ favoriteMovies, isLoading, isAuth }) => {
  const classes = favoritesContainerStyles();
  return (
    <div className={classes.wrapepr}>
      {isAuth ? (
        <React.Fragment>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <div>
              {favoriteMovies.length >= 1 ? (
                <ItemList list={favoriteMovies} />
              ) : (
                <Typography color="primary" variant="h4">
                  Your list is empty.
                </Typography>
              )}
            </div>
          )}
          <React.Fragment></React.Fragment>
        </React.Fragment>
      ) : (
        <Typography variant="h5" color="primary">
          You must be logged in first.
        </Typography>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFavoriteMoviesAsync: () => dispatch(getFavoriteMoviesAsync()),
  };
};

const mapStateToProps = createStructuredSelector({
  favoriteMovies: selectUserFavorites,
  isLoading: selectIsLoading,
  isAuth: selectIsAuth,
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);
