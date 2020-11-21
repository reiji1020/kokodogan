import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: '25ch',
    },
  },
}));

export default function ShareForm() {
  const classes = useStyles();
  const [category, setCategory] = React.useState('Caffe');

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const transitionLink = (url) => {
    window.location.href = url;
};

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="spot-name" label="スポット名" />
      <TextField id="spot-address-train" label="最寄り電停" />
      <TextField id="spot-address-bus" label="最寄りバス停" />
      <TextField id="spot-address-checkpoint" label="目印" />
      <TextField id="spot-address-free-comment" label="自由入力欄" />
      <InputLabel id="demo-simple-select-label">カテゴリー</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            onChange={handleChangeCategory}
        >
            <MenuItem value={'Caffe'}>カフェ</MenuItem>
            <MenuItem value={'Siteseeng'}>観光名所</MenuItem>
            <MenuItem value={'cat'}>ねこスポット</MenuItem>
        </Select>
        <Button variant="contained" style={{ color: "#ffffff", backgroundColor: "#c20005", width: "90%", padding: "30px", marginTop: "100px" }} onClick={()=>transitionLink('/?page=show')}>投稿する！</Button>
    </form>
  );
}
