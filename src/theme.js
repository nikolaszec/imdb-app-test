import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const colors = {
  red_100: "#ED3523",
  black_100: "#171a1c",
  black_200: "#222831",
  black_300: "#131517",
  black_400: "#0D0D0D",
  white_100: "#fff",
  green_100: "#19857b",
};
const defaultTheme = createMuiTheme();
const drawerWidth = "240";
let theme = createMuiTheme({
  overrides: {
    MuiSvgIcon: {
      root: {
        color: colors.red_100,
      },
      fontSizeSmall: {
        // display: "none",
        color: colors.red_100,
      },
    },
    "&& .MuiInput-root:hover::before": {
      border: "none",
    },
    MuiInputBase: {
      input: {
        backgroundColor: colors.black_300,
        padding: "0% 0",
      },
    },
    MuiTextField: {
      root: {
        "&& :focus": {
          outline: "none",
        },
      },
    },
    MuiFormControl: {
      marginNormal: {
        marginTop: "0",
        marginBottom: "0",
      },
    },
    MuiOutlinedInput: {
      root: {
        paddingRight: "0px",
        width: "100%",
      },
    },
    MuiAutocomplete: {
      inputFocused: {
        border: "none",
      },
      endAdornment: {
        color: "white",
      },
      root: {
        padding: "0",
        outline: "none",
        // width: "400px",
        // [defaultTheme.breakpoints.down("xs")]: {
        //   maxWidth: "250px",
        // },
      },
      input: {
        root: {
          ['class*="MuiFilledInput-root"']: {
            border: "1px solid red",
          },
        },
        "&& :focus": {
          border: "none",
        },
        paddingLeft: "2%",
        color: colors.white_100,
        padding: "0",
        width: "100%",
        margin: "0",
        outline: "none",
      },
      paper: {
        background: colors.black_200,
        color: "white",
        minWidth: "240px",
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: colors.black_400,
      },
      root: {
        [defaultTheme.breakpoints.up("sm")]: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
        },
      },
    },
    MuiDrawer: {
      paper: {
        width: drawerWidth,
        background: colors.black_300,
      },
    },
    MuiListItemIcon: {
      root: {
        color: colors.red_100,
      },
    },
    MuiListItem: {
      root: {
        backgroundColor: "transparent",
        color: "#ccc",
        width: "100%",

        "&& :hover": {
          color: colors.red_100,
          transition: ".4s",
          // letterSpacing: ".4px",
        },
      },
    },
    MuiCard: {
      root: {
        marginBottom: "10px",

        [defaultTheme.breakpoints.down("sm")]: {
          border: `3px solid ${colors.black_300}`,
          borderRadius: "3px",
        },
      },
    },
  },
  palette: {
    text: {
      primary: colors.white_100,
      secondary: colors.white_100,
    },
    primary: {
      main: colors.red_100,

      contrastText: colors.white_100,
    },
    secondary: {
      main: colors.green_100,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: colors.black_100,
      secondary: colors.black_300,
      contrastText: colors.white_100,
      [defaultTheme.breakpoints.down("sm")]: {
        default: colors.black_400,
      },
    },
  },
  root: {
    textDecoration: "none",
  },
});

theme = responsiveFontSizes(theme);

export default theme;
