import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import DateRangeIcon from "@material-ui/icons/DateRange";
import GradeIcon from "@material-ui/icons/Grade";
import FavoriteIcon from "@material-ui/icons/Favorite";
const navigationLinks = [
  {
    id: 1,
    path: {
      href: "/",
      as: "/",
    },
    linkText: "Popular movies",
    icon: <TrendingUpIcon />,
  },
  {
    id: 2,
    path: {
      href: "/movies/[slug]",
      as: "/movies/upcoming",
    },
    linkText: "Upcoming movies",
    icon: <DateRangeIcon />,
  },
  {
    id: 3,
    path: {
      href: "/movies/[slug]",
      as: "/movies/top_rated",
    },
    linkText: "Top rated movies",
    icon: <GradeIcon />,
  },
  {
    id: 4,
    path: {
      href: "/favorite",
      as: "/favorite",
    },
    linkText: "Favorite Movies",
    icon: <FavoriteIcon />,
  },
];
export default navigationLinks;
