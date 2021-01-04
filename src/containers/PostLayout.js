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
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import ShareMenu from "../components/ShareMenu";
import PostMenu from "../components/PostMenu";
import Comments from "./Comments";

const useStyles = makeStyles((theme) => ({
  root: {},
  media: {
    height: 0,
    paddingTop: "56.25%",
    objectFit: "contain",
    margin: "0 auto",
    backgroundSize: "contain",
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

export default function PostLayout(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [liked, setLiked] = React.useState(
    props.likes.find((like) => like.user_id === 41) ? "red" : null
  );

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
    setLiked("red");
    const data = {
      user_id: 41,
      upvote_id: props.postId,
      upvote_type: "Post",
    };
    fetch(`http://localhost:3000/likes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        if (!json.id) setLiked(null);
      });
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwLxFg4DRi0YW-8Vl-foPkVYZDQrVkszRm8g&usqp=CAU"
          />
        }
        action={
          <IconButton aria-label="settings">
            <PostMenu user={props.user} postId={props.postId} />
          </IconButton>
        }
        title={props.location}
        subheader={formatTime(props.date)}
      />
      <CardMedia
        className={classes.media}
        image={props.image}
        title={props.location}
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
          <ShareMenu postId={props.postId} />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ModeCommentIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Comments comments={props.comments} postId={props.postId} />
      </Collapse>
    </Card>
  );
}
