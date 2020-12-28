import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShareMenu from "../components/ShareMenu";
import PostMenu from "../components/PostMenu";

const useStyles = makeStyles((theme) => ({
  root: {},
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function commentMapper() {
    return props.comments.map((comment) => (
      <div key={comment.text}>{comment.text}</div>
    ));
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function formatTime(time) {
    let hours = time.slice(11, 13);
    let minutes = time.slice(13, 19);
    let twelveHour = hours > 11 ? "PM" : "AM";
    const date = `${
      hours > 12 ? hours - 12 : hours
    }${minutes} ${twelveHour} ${time.slice(5, 7)}/${time.slice(
      8,
      10
    )}/${time.slice(0, 4)}`;
    return date;
  }

  function likePostHandler() {
    const data = {
      user_id: props.user,
      upvote_id: props.postId,
      upvote_type: "Post",
    };
    fetch(`http://localhost:3000/likes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  }

  const liked = props.likes.find((like) => like.user_id === 42) ? "red" : null;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <PostMenu user={props.user} />
          </IconButton>
        }
        title={props.location}
        subheader={formatTime(props.date)}
      />
      <CardMedia
        className={classes.media}
        image={props.image}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={likePostHandler}>
          <FavoriteIcon style={{ color: liked }} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareMenu />
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
        {/* <CardContent>Comments</CardContent> */}
        {/* #make comment form */}
        <input></input>
        {commentMapper()}
      </Collapse>
    </Card>
  );
}
