import { LinearProgress, Typography } from "@material-ui/core";
//import useStyles from "./Footer.styles";

import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import useStyles from "./Loader.styles";

export const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
      <Typography>.......loading map</Typography>
    </div>
  );
};
