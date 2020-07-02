import React from "react";
import autoCompleteOptionStyles from "./auto-complete-option.styles";
import { Typography } from "@material-ui/core";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
const AutoCompleteOption = ({ imagePath, title }) => {
  const classes = autoCompleteOptionStyles();
  return (
    <div className={classes.optionWrapper}>
      {imagePath ? (
        <img
          alt="poster"
          className={classes.image}
          src={`https://image.tmdb.org/t/p/w92/${imagePath}`}
        />
      ) : (
        <MovieFilterIcon color="disabled" className={classes.image} />
      )}

      <Typography variant="body2">{title}</Typography>
    </div>
  );
};

export default AutoCompleteOption;
