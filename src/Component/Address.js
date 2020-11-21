import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Address(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <img src={`${process.env.PUBLIC_URL + props.maps}`} style={{width: "180px"}} />
        </Grid>
        <Grid item xs={6}>
          <Typography>路面電車：{props.train}</Typography>
          <Typography>バス：{props.bus}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
