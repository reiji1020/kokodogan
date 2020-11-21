import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

//Custom Component
import SlideShow from './SlideShow';
import Thumbnail from './Tnumbnail';
import Title from './Title';
import Address from './Address';
import ReccomendTitle from './RecommendTitle';

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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      {/* スライドコンポーネント */}
      <SlideShow />
      {/* サムネイル */}
      <Thumbnail />
      {/* タイトル */}
      <Title />
      {/* 交通アクセス */}
      <Address />
      {/* フリーコメント */}
      <Typography style={{margin: "2em"}}>
      長崎最古の喫茶店で長崎風ミルクセーキの元祖、そしてトルコライスが名物のお店です。
ここのトルコライスを構成するとんかつ、デミグラスソース、ピラフ、ナポリタン、そしてサラダと、いずれも及第点ではあるもののずばぬけて美味しいわけではありません。単品ごとに比較すればここよりも美味しい店はいくらでもあります。しかしながら一緒にいただくとなればこれ以外はないと思えるほどの組み合わせで、まさに大人のお子様ランチです。
長崎風ミルクセーキも美味です。長崎風ミルクセーキはミルクセーキをシャリシャリに凍らせたもので、食事とあわせてであればハーフサイズも注文できます。オッサンのぼっち旅でも恥ずかしがらずに注文するが吉です。他人の目なんざ気にしていたらぼっちはやってられません。
古くからの名店ゆえか、店内の雰囲気は雑然としていながらも風情があります。  朝九時開店二一時閉店という利用のしやすさも素敵です。
総合力の高さゆえ★五つの評価です。
      </Typography>
      {/* リコメンド */}
      <ReccomendTitle />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
