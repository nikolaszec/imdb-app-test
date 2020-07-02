import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addMovieToFavoritesAsync,
  removeMovieFromFavoritesAsync,
} from "../../redux/user/user.actions";
import { Grid, Card, IconButton, Grow, Typography } from "@material-ui/core";
import itemStyles from "./item.styles";
import ItemPreview from "../item-preview/item-preview.component";

const Item = ({ item }) => {
  const classes = itemStyles();
  const [detailsView, setDetailsView] = useState(false);
  const { title, poster_path } = item;
  return (
    <Grid item xs={12} sm={4} lg={2}>
      <Grow in>
        <div
          onMouseEnter={() => setDetailsView(true)}
          onMouseLeave={() => setDetailsView(false)}
        >
          <Card
            className={classes.root}
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.1)), url(${
                poster_path
                  ? `https://image.tmdb.org/t/p/w185/${poster_path}`
                  : ""
              })`,
            }}
          >
            <ItemPreview item={item} show={poster_path ? detailsView : true} />
          </Card>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            align="center"
            className={classes.title}
          >
            {title}
          </Typography>
        </div>
      </Grow>
    </Grid>
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
  isFavorite: state.user.favoriteMovies.find(
    (movie) => movie.id === props.item.id
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
