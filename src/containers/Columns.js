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
  const [joke, setJoke] = useState("");

  // useEffect(() => {
  //   fetch("https://dad-jokes.p.rapidapi.com/random/joke", {
  //     method: "GET",
  //     headers: {
  //       "x-rapidapi-key": "353b214e47mshb3d5a6a72a53090p187493jsnd3fe2d693d63",
  //       "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
  //     },
  //   })
  //     .then((resp) => resp.json())
  //     .catch((err) => console.log(err))
  //     .then((pun) => setJoke(pun));
  // }, []);

  useEffect(() => props.history.push("/home/feed"), []);

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
            <div className="menu">
              {/* <Paper className={classes.paper}>{joke}</Paper> */}
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default withRouter(Columns);
