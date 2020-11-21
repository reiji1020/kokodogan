import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ShowList() {
  const classes = useStyles();

  const transitionLink = (url) => {
    window.location.href = url;
};

  return (
    <List className={classes.root}>
      <ListItem onClick={()=>{transitionLink('/?page=show&id=0')}}>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="ツル茶ん" secondary="山田太郎" />
      </ListItem>
      <ListItem onClick={()=>{transitionLink('/?page=show&id=1')}}>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="めがね橋" secondary="鈴木裕子" />
      </ListItem>
      <ListItem onClick={()=>{transitionLink('/?page=show&id=2')}}>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="オランダ坂" secondary="佐藤貴教" />
      </ListItem>
    </List>
  );
}
