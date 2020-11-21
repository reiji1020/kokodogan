import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  cover: {
    width: 151,
  },
}));

export default function Tumbnail(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card>
        {props.image.map((each, index) => (
            <div key={index} style={{"display": "inline-block", "_display": "inline"}}>
                <img style={{ margin: "0.8em 0.8em 0.8em 0", border: "none", width: "50px"}} src={`${process.env.PUBLIC_URL + each}`} />
            </div>
        ))}
    </Card>
  );
}