import React, { useEffect } from "react";
import FavoriteButton from "../favorite-button/favorite-button.component";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchMovieDetailsAsync } from "../../redux/movies/movies.actions";
import Star from "@material-ui/icons/Star";
import itemDetailsStyles from "./item-details.styles";
import { Typography, CircularProgress } from "@material-ui/core";
import {
  selectMovieDetails,
  selectIsFetching,
} from "../../redux/movies/movies.selectors";

const ItemDetails = ({
  slug,
  fetchMovieDetailsAsync,
  movieDetails,
  isFetching,
}) => {
  useEffect(() => {
    fetchMovieDetailsAsync(slug);
  }, [slug]);
  const { poster_path, backdrop_path } = movieDetails;
  const stylesWithDynamicImage = itemDetailsStyles({
    imagePath: {
      small: poster_path
        ? `https://image.tmdb.org/t/p/w300/${poster_path}`
        : "",
      large: backdrop_path
        ? `https://image.tmdb.org/t/p/w1280/${backdrop_path}`
        : "",
    },
  });
  const classes = stylesWithDynamicImage();

  return (
    <div className={classes.mainContainer}>
      {isFetching ? (
        <CircularProgress />
      ) : (
        <div className={classes.imageContainer}>
          <div className={classes.detailsWrapper}>
            <Typography
              variant="h3"
              color="primary"
              gutterBottom
              className={classes.title}
            >
              {movieDetails.title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {" "}
              {movieDetails.vote_count > 1 ? (
                <React.Fragment>
                  <Star style={{ color: "gold" }} />
                  {movieDetails.vote_average} rated by {movieDetails.vote_count}{" "}
                  users
                </React.Fragment>
              ) : (
                <React.Fragment>No rating yet.</React.Fragment>
              )}{" "}
            </Typography>
            <FavoriteButton item={movieDetails} />
            <Typography gutterBottom variant="subtitle1">
              {movieDetails.overview}
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary">
              Duration:{" "}
              <span className={classes.dataInfo}>
                {" "}
                {movieDetails.runtime} min
              </span>
            </Typography>
            <Typography variant="subtitle1" gutterBottom color="primary">
              Relase date:{" "}
              <span className={classes.dataInfo}>
                {movieDetails.release_date}
              </span>
            </Typography>
            <Typography color="primary" variant="subtitle1">
              Budget:{" "}
              <span className={classes.dataInfo}>
                {movieDetails.budget > 1
                  ? `${movieDetails.budget} $`
                  : "No data yet."}
              </span>
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieDetailsAsync: (movieId) =>
      dispatch(fetchMovieDetailsAsync(movieId)),
  };
};

const mapStateToProps = createStructuredSelector({
  movieDetails: selectMovieDetails,
  isFetching: selectIsFetching,
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);
