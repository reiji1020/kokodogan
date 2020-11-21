import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

//Custom Component
import SlideShow from './SlideShow';

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

      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            山田
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="ツル茶ん"
        subheader="Novenver 21, Sat"
      />
      <SlideShow />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          長崎ゆかりの名店です！トルコライスも美味しいですが、ミルクセーキもとてもおいしいです！
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            最寄りのバス停・電停：最寄り電停は思案橋電停です！電車のほうがおすすめです
          </Typography>
          <Typography paragraph>
            カテゴリ：Cafe
          </Typography>
          <Typography paragraph>
            次どこ行くね？：眼鏡橋に行ったよ！
          </Typography>
          <Typography>
            自由入力コメント：長崎市の中心部にあるから、観光していてお腹が空いたときに寄れるのが利点です！ガッツリ食べたいときも、ちょっと休憩したいときもおすすめよ！
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
