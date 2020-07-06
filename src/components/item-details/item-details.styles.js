import { makeStyles, useTheme } from "@material-ui/core/styles";
const itemDetailsStyles = ({ imagePath }) => {
  return makeStyles((theme) => ({
    title: {
      [theme.breakpoints.down("sm")]: {
        marginTop: "13%",
      },
    },
    data: {
      color: theme.palette.secondary.main,
    },
    dataInfo: {
      color: theme.palette.primary.contrastText,
    },
    mainContainer: {
      height: "86vh",
      marginLeft: "0%",
      width: "100%",
      borderRadius: "5px",
      [theme.breakpoints.down("sm")]: {
        minHeight: "fit-content",
        maxHeight: "100vh",
        height: "100%",
      },
    },
    imageContainer: {
      height: "100%",
      borderRadius: "5px",
      width: "100%",
      backgroundSize: "cover",
      objectFit: "cover",

      backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.6),
          rgba(0, 0, 0, 0.7),
          rgba(0, 0, 0, 0.83),
          rgba(0, 0, 0, 0.92),
          rgba(0, 0, 0, 0.95),
           rgba(0, 0, 0, 1)), 
           
           url(${imagePath.large && imagePath.large})`,

      [theme.breakpoints.down("lg")]: {
        backgroundPositionX: "40%",
      },

      [theme.breakpoints.down("sm")]: {
        backgroundSize: "100% 100%",
        backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.6),
                rgba(0, 0, 0, 0.7),
                rgba(0, 0, 0, 0.83),
                rgba(0, 0, 0, 0.92),
                rgba(0, 0, 0, 0.95),
                 rgba(0, 0, 0, 1)), 
                 
                 url(${imagePath.small && imagePath.small})`,
      },
      [theme.breakpoints.down("xs")]: {
        position: "absolute",
        top: "56px",
        left: "0",
        backgroundPositionY: "56px",
        backgroundSize: "100% 100%",
        backgroundAttachment: "fixed",
        backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.83),
            rgba(0, 0, 0, 0.92),
            rgba(0, 0, 0, 0.95),
             rgba(0, 0, 0, 1)), 
             
             url(${imagePath.small && imagePath.small})`,
      },
    },
    detailsWrapper: {
      width: "65%",
      padding: "8% 0 0 5%",
      [theme.breakpoints.up("lg")]: {
        width: "63%",
      },
      [theme.breakpoints.up("sm")]: {
        width: "70%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        padding: "7% 2% 5% 3%",
      },
    },
  }));
};

export default itemDetailsStyles;
