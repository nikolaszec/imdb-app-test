import { makeStyles, useTheme } from "@material-ui/core/styles";
const itemDetailsStyles = ({ imagePath }) => {
  return makeStyles((theme) => ({
    mainContainer: {
      height: "86vh",
      marginLeft: "0%",
      width: "100%",
      borderRadius: "5px",
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
           
           url(${imagePath.large})`,
      [theme.breakpoints.down("xs")]: {
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.83),
            rgba(0, 0, 0, 0.92),
            rgba(0, 0, 0, 0.95),
             rgba(0, 0, 0, 1)), 
             
             url(${imagePath.small})`,
      },
    },
    detailsWrapper: {
      width: "65%",
      padding: "8% 0 0 5%",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        padding: "5% 2%",
      },
    },
  }));
};

export default itemDetailsStyles;
