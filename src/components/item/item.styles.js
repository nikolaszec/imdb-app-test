import { makeStyles, useTheme } from "@material-ui/core/styles";
const itemStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    margin: "0 auto",
    width: "185px",
    color: "white",
    minHeight: "270px",
    maxHeight: "270px",
    backgroundSize: "center",
  },
  detailsWrapper: {
    background: theme.palette.background.secondary,
    color: theme.palette.primary.contrastText,
    opacity: ".82",
    position: "absolute",
    transition: "height .3s, visibility .1s",
  },
  title: {
    fontWeight: "600",
    marginTop: "3%",
  },
}));

export default itemStyles;
