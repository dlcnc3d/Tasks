import { LinearProgress, Typography } from "@material-ui/core";
//import useStyles from "./Footer.styles";

import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) =>
createStyles({
    root: {
      //width: '100%',
      //height:"5",
      
      position: "absolute",
      display:"flex",
      paddingTop: "35vh",
      paddingLeft: "35vw",
      alig:"center",

    },
  }),
);
export const Loader = () => { 
  const classes = useStyles();

  return (
    <div className={classes.root}>
 <CircularProgress />
 <Typography>.......loading map</Typography>
    </div>
  );
}



