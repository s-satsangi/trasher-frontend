import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PostLayout from "./PostLayout";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((data) => data.json())
      .then((json) => {
        const posts = json.map((post) => {
          return (
            <PostLayout
              image={post.image}
              location={post.locaiton}
              text={post.text}
              date={post.created_at}
            />
          );
        });
        setPosts(posts);
      });
  }, []);

  const classes = useStyles();
  let arr = ["Notifications", "Settings", "Likes", "Som other shit", 5];
  arr = arr.map((num) => <Paper className={classes.paper}>{num}</Paper>);
  return (
    <div className={classes.root}>
      <Grid container spacing={2} direction="column">
        <Grid item xs={12} container>
          <Grid xs={2}>Jake</Grid>
          <Grid xs={8} />
          <Grid xs={2}>Short</Grid>
        </Grid>
        <Grid xs={12} container>
          <Grid xs={3}>
            <Paper className={classes.paper}>{arr}</Paper>
          </Grid>
          <Grid container xs={6} className={"flex-section"}>
            <Grid className="flex-col-scroll">{posts}</Grid>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
