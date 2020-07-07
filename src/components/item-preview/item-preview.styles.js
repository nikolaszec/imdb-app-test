import { makeStyles, useTheme } from "@material-ui/core/styles";
const itemPreviewStyles = makeStyles((theme) => ({
  detailsWrapper: {
    background: theme.palette.background.secondary,
    color: theme.palette.primary.contrastText,
    opacity: ".82",
    position: "absolute",
    transition: "height .3s, visibility .1s",
    width: "100%",
  },
  detailsContentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  seeMoreBtn: {
    marginTop: "20%",
    background: theme.palette.secondary.main,
  },
}));

export default itemPreviewStyles;
