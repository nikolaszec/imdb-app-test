import { makeStyles, useTheme } from "@material-ui/core/styles";
const searchBarStyles = makeStyles((theme) => ({
  form: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  autoComplete: {
    color: "white",
    [theme.breakpoints.up("sm")]: {
      width: "500px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
  searchInputWrapper: {
    display: "flex",
    alignItems: "flex-end",
    background: theme.palette.background.secondary,
    padding: "2% 4% 0 4%",
    borderRadius: "3px",
  },
  submitBtn: {
    color: "white",
    width: "25px",
    height: "100%",
    background: "transparent",
    marginLeft: "10px",
  },
}));

export default searchBarStyles;
