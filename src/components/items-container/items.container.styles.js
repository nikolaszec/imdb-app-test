import { makeStyles, useTheme } from "@material-ui/core/styles";
const itemsContainerStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "3%",
  },
  actionsWrapper: {
    marginTop: "1%",
    display: "flex",
    justifyContent: "center",
  },
}));

export default itemsContainerStyles;
