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
    padding: "0px",
    [theme.breakpoints.up("sm")]: {
      width: "500px",
    },
  },
  searchInputWrapper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    background: theme.palette.background.secondary,
    padding: "2% 4% 0 4%",
    borderRadius: "3px",
    [theme.breakpoints.down("sm")]: {
      padding: "0 2%",
      justifyContent: "space-between",
    },
  },
  submitBtn: {
    color: "white",
    width: "25px",
    height: "100%",
    background: "transparent",
    marginLeft: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "20px",
      marginLeft: "5px",
    },
  },
}));

export default searchBarStyles;
