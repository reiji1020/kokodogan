import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


export default function Header() {

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            ココどがん
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
