import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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

export default function Address() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {/* ここにGoogleMap */}
        <Grid item xs={6}>
          <Paper className={classes.paper}>ぐぐるまっぷがはいるよ</Paper>
        </Grid>
        <Grid item xs={6}>
          <span>長崎電気軌道「思案橋」電停から徒歩3分です！</span>
        </Grid>
      </Grid>
    </div>
  );
}
