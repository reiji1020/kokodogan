import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import SvgRogoHead from '../svgr/RogoHead';

export default function Header() {

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "#c20005"  }}>
          <div style={{width: "100px", height: "50px"}}>
            <SvgRogoHead style={{width: "150px", height: "50px", marginLeft: "10px"}} />
          </div>
      </AppBar>
    </div>
  );
}
