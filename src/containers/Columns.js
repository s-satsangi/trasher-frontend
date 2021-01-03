import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SideMenu from "../components/SideMenu";
import PostsContainer from "./PostsContainer";

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
  return (
    <div className={classes.root}>
      <Grid container spacing={2} direction="column">
        <Grid item xs={12} container className="menu"></Grid>
        <Grid xs={12} item container>
          <Grid xs={1} item></Grid>
          <Grid xs={1} item className="menu-position menu">
            {/* <SideMenu /> */}
          </Grid>
          <Grid xs={1} item />
          <Grid container item xs={7}>
            <Grid container className="flex-section">
              {props.renderCenter ? props.renderCenter : <PostsContainer />}
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
