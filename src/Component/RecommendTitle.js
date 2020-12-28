import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SvgRogoRecommend from '../svgr/RogoRecommend';
import SvgArrow from '../svgr/Arrow';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

export default function RecommendTitle() {
  const classes = useStyles();
  const theme = useTheme();

  return (
      <div style={{display: "inline-block", _display: "inline", float: "left"}}>
        <SvgRogoRecommend style={{width: "120px", height: "70px", marginLeft: "2em"}} />
        <SvgArrow style={{width: "120px", height: "70px", marginLeft: "2em"}} />
      </div>
  );
}