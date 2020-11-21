import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';

//Custom Component
import SlideShow from './SlideShow';
import Thumbnail from './Tnumbnail';
import Title from './Title';
import Address from './Address';
import ReccomendTitle from './RecommendTitle';
import Recommend from './Recommend';
import SvgRogoComment from '../svgr/RogoComment';

const id0 = require('../static/0.json');

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function SpotInfo() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  useEffect(()=>{
      console.log(id0)
  })

  return (
    <Card className={classes.root}>
      {/* スライドコンポーネント */}
      <SlideShow image={id0.image} />
      {/* サムネイル */}
      <Thumbnail image={id0.image} />
      {/* タイトル */}
      <Title />
      {/* 交通アクセス */}
      <Address train={id0.accessTrain} bus={id0.accessBus} maps={id0.googleMapImage} />
      {/* フリーコメント */}
      <Typography style={{margin: "2em"}}>
        {id0.freeComment}
      </Typography>
      {/* リコメンド */}
      <ReccomendTitle />
      <div />
      <React.Fragment>
      {id0.recommend.map(item=>(
            <Recommend image={item.thumbnail} spotName={item.spotName} />
        ))}
      </React.Fragment>
      <SvgRogoComment style={{width: "100px", height: "50px"}} />
      {id0.Comment.map(item=>(
          <React.Fragment>
            <Typography>{`${item.auther}:${item.comments}`}</Typography>
          </React.Fragment>
        ))}
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        <Typography>{id0.good}つの「よかばい!」が付いています</Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}
