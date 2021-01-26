import React from "react";
import {
  Box,
  Button,
} from "@material-ui/core";

import useStyles from "components/BasicButton/styles";

function BasicButton(props: any) {
  const classes = useStyles();
  return (
    <Box>
      <button onClick={props.onClick} className={props.whiteTheme ? classes.whiteButton : classes.button}>{props.title}</button>
      <span className={props.whiteTheme ? classes.whiteFirstSpan : classes.firstSpan } />
      <span className={classes.secondSpan} />
    </Box>
  );
}

export default BasicButton;