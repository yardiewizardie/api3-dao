import React from "react";
import { Link } from "react-router-dom";

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
          <Typography className={classes.sideBarTitle}>
            <img src={vector} alt="" className={classes.vectorLogo} />
            <Link to="/dashboard" className={classes.link}>
              Dashboard
            </Link>
          </Typography>
          <Typography className={classes.sideBarTitle}>
            <img src={vector} alt="" className={classes.vectorLogo} />
            <Link to="/proposals" className={classes.link}>
              Proposals
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Sidebar;