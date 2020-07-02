import React from "react";
import { connect } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Tooltip from "@material-ui/core/Tooltip";
import { IconButton } from "@material-ui/core";

import {
  addMovieToFavoritesAsync,
  removeMovieFromFavoritesAsync,
} from "../../redux/user/user.actions";
import { selectIsAuth } from "../../redux/auth/auth.selectors";

const FavoriteButton = ({
  isAuth,
  loading,
  isFavorite,
  item,
  addMovieToFavoritesAsync,
  removeMovieFromFavoritesAsync,
}) => {
  return (
    <div>
      {!isAuth ? (
        <Tooltip title="Please login first">
          <IconButton>
            <FavoriteBorderIcon color="primary" />
          </IconButton>
        </Tooltip>
      ) : (
        <React.Fragment>
          <IconButton
            disabled={loading}
            onClick={
              isFavorite
                ? () => removeMovieFromFavoritesAsync(item)
                : () => addMovieToFavoritesAsync(item)
            }
          >
            {isFavorite ? (
              <React.Fragment>
                <FavoriteIcon color="primary" />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <FavoriteBorderIcon color="primary" />{" "}
              </React.Fragment>
            )}
          </IconButton>
        </React.Fragment>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMovieToFavoritesAsync: (movie) =>
      dispatch(addMovieToFavoritesAsync(movie)),
    removeMovieFromFavoritesAsync: (movie) =>
      dispatch(removeMovieFromFavoritesAsync(movie)),
  };
};

const mapStateToProps = (state, props) => ({
  loading: state.user.loading,
  isAuth: selectIsAuth(state),
  isFavorite: state.user.favoriteMovies.find(
    (movie) => movie.id === props.item.id
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);
