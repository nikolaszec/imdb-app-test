import { makeStyles, useTheme } from "@material-ui/core/styles";
const navItemLinkStyles = makeStyles((theme) => ({
  active: {
    color: theme.palette.primary.main,
  },
}));

export default navItemLinkStyles;
