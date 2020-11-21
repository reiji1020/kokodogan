import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SvgShopTitle from '../svgr/ShopTitle';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

export default function Title() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <SvgShopTitle style={{width: "120px", height: "70px", float: "left", marginLeft: "2em"}} />
  );
}