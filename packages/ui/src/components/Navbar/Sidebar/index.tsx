import React from "react";
import { NavLink } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";

import useStyles from "components/Navbar/styles";
import vector from "../../../assets/vector.png";

function Sidebar() {
  const classes = useStyles();
  return (
    <div className={classes.sidebarRoot}>
      <AppBar position="sticky">
        <Toolbar className={classes.sideBar}>
        <NavLink activeClassName={classes.activeSidebar} to="/dashboard" className={classes.sideBarTitle}>
          <Typography className={classes.link}>
            <img src={vector} alt="" className={classes.vectorLogo} />
              Dashboard
          </Typography>
          </NavLink>
          <NavLink activeClassName={classes.activeSidebar} to="/proposals" className={classes.sideBarTitle}>
          <Typography className={classes.link}>
            <img src={vector} alt="" className={classes.vectorLogo} />
              Proposals
          </Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Sidebar;