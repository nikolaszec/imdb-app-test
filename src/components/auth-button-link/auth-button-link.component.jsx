import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsAuth } from "../../redux/auth/auth.selectors";
import { logoutAsync } from "../../redux/auth/auth.actions";
import { Button } from "@material-ui/core";
import authButtonLinkStyles from "./auth-button-link.styles";

const AuthButtonLink = ({ logoutAsync, isAuth }) => {
  const router = useRouter();
  const classes = authButtonLinkStyles();
  return (
    <div>
      {!isAuth ? (
        <Button
          className={classes.root}
          fullWidth
          onClick={() => router.push("/login")}
        >
          Login
        </Button>
      ) : (
        <Button className={classes.root} fullWidth onClick={logoutAsync}>
          Logout
        </Button>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutAsync: () => dispatch(logoutAsync()),
  };
};

const mapStateToProps = createStructuredSelector({
  isAuth: selectIsAuth,
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthButtonLink);
