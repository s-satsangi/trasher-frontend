import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import PostAddIcon from "@material-ui/icons/PostAdd";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import GitHubIcon from "@material-ui/icons/GitHub";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: "100%",
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    display: "flex",
    justifyContent: "right",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function SideMenu(props) {
  const classes = useStyles();

  function logout() {
    fetch(`https://scrapparts.herokuapp.com/logout`, {
      method: "DELETE",
      credentials: "include",
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
    if (typeof Storage !== undefined) {
      sessionStorage.setItem("loggedIn", "false");
      sessionStorage.setItem("username", "");
      sessionStorage.setItem("user_id", "");
      props.logIn(false);
    }
  }
  function processMenuChoice(text) {
    //take all spaces out, then take string to lower case
    return text.replace(/\s+/g, "").toLowerCase();
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <div
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        // anchor="right"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {["Feed", "Logout", "New Post"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 ? (
                  <DynamicFeedIcon />
                ) : index === 1 ? (
                  <ExitToAppIcon />
                ) : (
                  <PostAddIcon />
                )}
              </ListItemIcon>
              {text !== "Logout" ? (
                <Link
                  className="sidemenu"
                  to={`/home/${processMenuChoice(text)}`}
                >
                  {" "}
                  {text}{" "}
                </Link>
              ) : (
                <Link
                  className="sidemenu"
                  to={`/home/${processMenuChoice(text)}`}
                  onClick={logout}
                >
                  {" "}
                  {text}{" "}
                </Link>
              )}
            </ListItem>
          ))}
          <ListItem>
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <Link to="/home/updateprofile" className="sidemenu">
              Update Profile
            </Link>
          </ListItem>
          <a
            href="https://github.com/jrshort89"
            target="_blank"
            className="sidemenu"
          >
            <ListItem>
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
              Jake's Github
            </ListItem>
          </a>

          <a
            href="https://github.com/s-satsangi"
            target="_blank"
            className="sidemenu"
          >
            <ListItem>
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
              Sharad's Github
            </ListItem>
          </a>
        </List>
        <Divider />
      </div>
    </div>
  );
}
