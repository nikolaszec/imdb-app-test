import { makeStyles, useTheme } from "@material-ui/core/styles";
const autoCompleteOptionStyles = makeStyles((theme) => ({
  optionWrapper: {
    display: "flex",
    alignItems: "flex-end",
  },
  image: {
    height: "50px",
    width: "50px",
    marginRight: "7px",
    borderRadius: "3px",
  },
  detailsWrapper: {
    background: "black",
    color: "white",
    opacity: ".82",
    position: "absolute",
    transition: "height .3s, visibility .1s",
  },
}));

export default autoCompleteOptionStyles;
