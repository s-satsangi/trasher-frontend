import { React, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SideMenu from "../components/SideMenu";
import PostsContainer from "./PostsContainer";
import PostForm from "../components/PostForm";
import { Switch, Route, useRouteMatch, withRouter } from "react-router-dom";

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

function Columns(props) {
  const classes = useStyles();

  useEffect(() => props.history.push("/home/feed"), []);

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
                <Route path={`/home/feed`}>
                  <PostsContainer />
                </Route>
                <Route path={"/home/newpost"}>
                  <PostForm />
                </Route>
              </Switch>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <div className="menu"></div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default withRouter(Columns);
