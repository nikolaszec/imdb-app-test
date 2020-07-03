import { makeStyles, useTheme } from "@material-ui/core/styles";
const itemDetailsStyles = ({ imagePath }) => {
  return makeStyles((theme) => ({
    title: {
      [theme.breakpoints.down("sm")]: {
        marginTop: "25%",
      },
    },
    data: {
      color: theme.palette.secondary.main,
    },
    dataInfo: {
      color: "white",
    },
    mainContainer: {
      height: "86vh",
      marginLeft: "0%",
      width: "100%",
      borderRadius: "5px",
      [theme.breakpoints.down("sm")]: {
        // minHeight: "100vh",
        // maxHeight: "100%",
        minHeight: "fit-content",
        maxHeight: "100%",
        height: "100vh",
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
      [theme.breakpoints.down("xs")]: {
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
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        padding: "7% 2% 5% 3%",
      },
    },
  }));
};

export default itemDetailsStyles;
