import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 220;

export const layoutStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    background: theme.palette.background.secondary,
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      background: theme.palette.background.secondary,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px) `,
      marginLeft: drawerWidth,
      background: theme.palette.background.secondary,
    },
  },
  menuButton: {
    marginRight: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    height: "100%",
    background: theme.palette.background.secondary,
    borderTop: `3px solid ${theme.palette.primary.main}`,
    borderBottom: `3px solid ${theme.palette.primary.main}`,

    borderRadius: "3%",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
