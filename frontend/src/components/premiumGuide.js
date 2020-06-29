import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  h: {
      color:'black',
      fontFamily: 'Segoe UI',
      fontWeight:'regular',
  },
}));

function PremiumGuide() {
const classes = useStyles();
  return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className={classes.paper} style={{paddingBottom:"0", marginBottom:"0"}}><h3 className={classes.h}>Try the first 7 days for free!</h3></div>
        </Grid>
        <Grid className={classes.paper} style={{paddingTop:'0'}} item xs={12} md={4}>1. Register</Grid>
        <Grid className={classes.paper} style={{paddingTop:'0'}} item xs={12} md={4}>2. Add Payment</Grid>
        <Grid className={classes.paper} style={{paddingTop:'0'}} item xs={12} md={4}>3. Premium</Grid>
      </Grid>
  );
}

export default PremiumGuide;