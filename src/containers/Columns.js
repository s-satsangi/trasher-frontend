import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SideMenu from "../components/SideMenu";
import PostsContainer from "./PostsContainer";
import PostForm from "../components/PostForm";
import { Switch, Route, useRouteMatch } from "react-router-dom";

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

export default function Columns(props) {
  const classes = useStyles();
  let { path, url } = useRouteMatch();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} direction="column">
        <Grid item xs={12} container className="menu"></Grid>
        <Grid xs={12} item container>
          <Grid xs={1} item></Grid>
          <Grid xs={1} item className="menu-position menu">
            <SideMenu logIn={props.logIn} />
          </Grid>
          <Grid xs={1} item />
          <Grid container item xs={7}>
            <Grid container className="flex-section">
              <Switch>
                <Route path={`/home/newpost`}>
                  <PostForm />
                </Route>
                <Route path={`/home/feed`}>
                  <PostsContainer />
                </Route>
              </Switch>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <div className="menu">
              <Paper className={classes.paper}>Another Menu</Paper>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
