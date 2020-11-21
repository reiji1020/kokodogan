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
const id1 = require('../static/1.json');
const id2 = require('../static/2.json');

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
  const [id, setId] = React.useState(id0);

      // get query
      const getUrlQueries = () => {
		const queryStr = window.location.search.slice(1); // 文頭?を除外
		let queries = {};

		// クエリがない場合は空のオブジェクトを返す
		if (!queryStr) {
			return queries;
		}

		// クエリ文字列を & で分割して処理
		queryStr.split('&').forEach(function(queryStr) {
			// = で分割してkey,valueをオブジェクトに格納
			var queryArr = queryStr.split('=');
			queries[queryArr[0]] = queryArr[1];
		});

		return queries;
    }

    useEffect(()=>{
        getUrlQueries().id === '0' ? (
            setId(id0)
        ): getUrlQueries().id === '1' ? (
            setId(id1)
        ): getUrlQueries().id === '2' ? (
            setId(id2)
        ): setId({})
    });

  return (
    <Card className={classes.root}>
      {/* スライドコンポーネント */}
      <SlideShow image={id.image} />
      {/* サムネイル */}
      <Thumbnail image={id.image} />
      {/* タイトル */}
      <Title />
      {/* 交通アクセス */}
      <Address train={id.accessTrain} bus={id.accessBus} maps={id.googleMapImage} />
      {/* フリーコメント */}
      <Typography style={{margin: "2em"}}>
        {id.freeComment}
      </Typography>
      {/* リコメンド */}
      <ReccomendTitle />
      <div />
      <React.Fragment>
      {id.recommend.map(item=>(
            <Recommend image={item.thumbnail} spotName={item.spotName} />
        ))}
      </React.Fragment>
      <SvgRogoComment style={{width: "100px", height: "50px"}} />
      {id.Comment.map(item=>(
          <React.Fragment>
            <Typography>{`${item.auther}:${item.comments}`}</Typography>
          </React.Fragment>
        ))}
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        <Typography>{id.good}つの「よかばい!」が付いています</Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}
