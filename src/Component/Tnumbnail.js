import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  cover: {
    width: 151,
  },
}));

export default function Tumbnail() {
  const classes = useStyles();
  const theme = useTheme();

  const images = [
    `${process.env.PUBLIC_URL + '/img/turu.jpg'}`,
    `${process.env.PUBLIC_URL + '/img/turu2.jpg'}`,
    `${process.env.PUBLIC_URL + '/img/turu3.jpg'}`
  ];

  return (
    <Card>
        {images.map((each, index) => (
            <div key={index} style={{"display": "inline-block", "_display": "inline"}}>
            <img style={{ margin: "0.8em 0.8em 0.8em 0", border: "none", width: "50px"}} src={each} />
            </div>
        ))}
    </Card>
  );
}