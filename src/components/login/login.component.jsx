import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { TextField, Button, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsAuth, selectError } from "../../redux/auth/auth.selectors";
import { loginAsync } from "../../redux/auth/auth.actions";
import loginStyles from "./login.styles";
import { getFavoriteMoviesAsync } from "../../redux/user/user.actions";

const Login = ({ loginAsync, loginError, isAuth, getFavoriteMoviesAsync }) => {
  const classes = loginStyles();
  const router = useRouter();
  useEffect(() => {
    isAuth ? router.push("/") : null;
  }, []);
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
    setErrorMessage("");
  };

  useEffect(() => {
    setErrorMessage("");
  }, [formValues]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginSuccess = await loginAsync(formValues);
    if (loginSuccess) {
      getFavoriteMoviesAsync();
      router.push("/");
    } else {
      setErrorMessage(loginError);
    }
  };

  return (
    <div className={classes.formWrapper}>
      <form onSubmit={handleSubmit} className={classes.form} autoComplete="off">
        <Typography color="textPrimary" variant="caption">
          *Please use your tmdb credentials, if you don't have account feel free
          to create one{" "}
          <a
            className={classes.signUpLink}
            href="https://www.themoviedb.org/account/signup"
            target="_blank"
          >
            here
          </a>
          .
        </Typography>
        <TextField
          required
          variant="filled"
          margin="dense"
          color="primary"
          onChange={handleChange}
          name="username"
          title="Username"
          type="text"
          value={formValues.username}
          label="Username"
        />

        <TextField
          color="primary"
          required
          variant="filled"
          margin="dense"
          label="Password"
          onChange={handleChange}
          name="password"
          title="Password"
          type="password"
          value={formValues.password}
        />
        <Button
          className={classes.loginBtn}
          variant="contained"
          color="primary"
          type="submit"
        >
          Login
        </Button>
      </form>
      {errorMessage ? (
        <Typography variant="body1" color="primary">
          {errorMessage}
        </Typography>
      ) : null}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginAsync: (userCredentials) => dispatch(loginAsync(userCredentials)),
    getFavoriteMoviesAsync: () => dispatch(getFavoriteMoviesAsync()),
  };
};
const mapStateToProps = createStructuredSelector({
  isAuth: selectIsAuth,
  loginError: selectError,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
