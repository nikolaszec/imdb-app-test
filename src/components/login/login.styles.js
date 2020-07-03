import { makeStyles, useTheme } from "@material-ui/core/styles";
const loginStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: "20%",
  },
  formWrapper: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      padding: "0 3%",
    },
    width: "50%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "70vh",
  },
  loginBtn: {
    marginTop: "3.2%",
  },
  signUpLink: {
    color: theme.palette.primary.main,
    fontWeight: "600",
    textDecoration: "none",
  },
}));

export default loginStyles;
