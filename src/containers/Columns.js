import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PostLayout from "./PostLayout";
import InfiniteScroll from "react-infinite-scroller";

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
    setPosts(getPosts());
  }, []);

  const getPosts = () => {
    let postsRequest;
    const postsLength = posts ? posts.length : 0;
    fetch(
      // /${postsLength}
      `http://localhost:3000/posts`,
      {
        // client_id: api.client_id,
        linked_partitioning: 1,
        page_size: 10,
      },
      {
        cache: true,
      }
    )
      .then((data) => data.json())
      .then((json) => {
        postsRequest = json.map((post) => {
          return (
            <PostLayout
              key={post.id}
              image={post.image}
              location={post.locaiton}
              text={post.text}
              date={post.created_at}
            />
          );
        });
        setPosts(postsRequest);
      });
  };

  const classes = useStyles();
  let arr = ["Notifications", "Settings", "Likes", "Som other shit", 5];
  arr = arr.map((num) => <Paper className={classes.paper}>{num}</Paper>);
  return (
    <div className={classes.root}>
      <Grid container spacing={2} direction="column">
        <Grid item xs={12} container className="menu">
          <Grid xs={2}>Jake</Grid>
          <Grid xs={8} />
          <Grid xs={2}>Short</Grid>
        </Grid>
        <Grid xs={12} container>
          <Grid xs={3}>
            <div className="menu">
              <Paper className={classes.paper}>{arr}</Paper>
            </div>
          </Grid>
          <Grid container xs={7}>
            <Grid container className="flex-section">
              <InfiniteScroll
                pageStart={0}
                loadMore={getPosts}
                hasMore={true || false}
                loader={
                  <div className="loader" key={0}>
                    Loading ...
                  </div>
                }
              >
                {posts}
              </InfiniteScroll>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <div className="menu">
              <Paper className={classes.paper}>xs=6</Paper>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
