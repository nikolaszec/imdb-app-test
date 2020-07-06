import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import navItemLinkStyles from "./nav-item-link.styles";

const NavItemLink = ({ link }) => {
  const classes = navItemLinkStyles();
  const isActive = useRouter().asPath === link.path.as;
  return (
    <Link key={link.id} href={link.path.href} as={link.path.as}>
      <ListItem button>
        <ListItemIcon>{link.icon}</ListItemIcon>
        <ListItemText
          className={isActive ? classes.active : ""}
          primary={link.linkText}
        />
      </ListItem>
    </Link>
  );
};

export default NavItemLink;
