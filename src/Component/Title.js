import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

// TODO svgに変える
export default function Title() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            山田
          </Avatar>
        }
        title="ツル茶ん"
        subheader="Novenver 21, Sat"
      />
  );
}