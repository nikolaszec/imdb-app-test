import React, { useEffect } from "react";
import AuthButtonLink from "../auth-button-link/auth-button-link.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { logoutAsync } from "../../redux/auth/auth.actions";
import { selectIsAuth } from "../../redux/auth/auth.selectors";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "next/link";
import navigationLinks from "./navigation-links";

const Navigation = () => {
  return (
    <List>
      {navigationLinks.map((link) => {
        return (
          <Link key={link.id} href={link.path.href} as={link.path.as}>
            <ListItem button selected={true}>
              <ListItemIcon>{link.icon}</ListItemIcon>
              <a>
                <ListItemText primary={link.linkText} />
              </a>
            </ListItem>
          </Link>
        );
      })}
      <AuthButtonLink />
    </List>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutAsync: () => dispatch(logoutAsync()),
  };
};

const mapStateToProps = createStructuredSelector({
  isAuth: selectIsAuth,
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
