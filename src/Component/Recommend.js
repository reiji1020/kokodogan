import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  cover: {
    width: 151,
  },
}));

export default function Recommend(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card>
        <img style={{ margin: "0.8em 0.8em 0.8em 0", border: "none", width: "50px"}} src={`${process.env.PUBLIC_URL + props.image}`} />
        <Typography>{props.spotName}</Typography>
    </Card>
  );
}