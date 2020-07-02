import React from "react";
import FavoriteButton from "../favorite-button/favorite-button.component.jsx";
import { useRouter } from "next/router";
import itemPreviewStyles from "./item-preview.styles";
import { Typography, Button } from "@material-ui/core";
import Star from "@material-ui/icons/Star";
import Link from "next/link";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsAuth } from "../../redux/auth/auth.selectors";
const ItemPreview = ({ item, isAuth, show }) => {
  const classes = itemPreviewStyles();
  const router = useRouter();
  const { release_date, vote_count, vote_average, id } = item;
  const handleSeeMore = (id) => {
    router.push("/movie/[slug]", `/movie/${id}`);
  };

  return (
    <div
      className={classes.detailsWrapper}
      style={{
        height: show ? "100%" : "0%",
        visibility: show ? "visible" : "hidden",
      }}
    >
      <div className={classes.detailsContentContainer}>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          <Star style={{ color: "gold" }} />{" "}
          {vote_count > 1 ? (
            vote_average
          ) : (
            <React.Fragment>No rating yet.</React.Fragment>
          )}
        </Typography>
        <Typography variant="h6" color="textPrimary">
          Year: {new Date(release_date).getFullYear()}
        </Typography>
        {isAuth ? <FavoriteButton item={item} /> : null}
        <Button
          color="secondary"
          variant="contained"
          className={classes.seeMoreBtn}
          onClick={() => handleSeeMore(id)}
        >
          See more
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isAuth: selectIsAuth,
});

export default connect(mapStateToProps)(ItemPreview);
