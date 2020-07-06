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
import { useRouter } from "next/router";
import NavItemLink from "../nav-item-link/nav-item-link.component";

const Navigation = () => {
  return (
    <List>
      {navigationLinks.map((link) => {
        return <NavItemLink link={link} key={link.id} />;
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
