import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import UserForm from "../containers/UserForm";
import { connect } from "react-redux";
import * as actionTypes from "../redux/actions";

function Login(props) {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function sessionUsername(username) {
    setUsername(username);
    props.setUsername(user.user);
    window.sessionStorage.setItem("username", username);
  }

  function sessionUserId(id) {
    setUserId(id);
    props.setUserId(user.uid);
    window.sessionStorage.setItem("user_id", id);
  }

  const setFetch = () => {
    event.preventDefault();
    fetch("https://litterally.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Credentials": 'Content-Type,Authorization',
      },
      credentials: 'include',
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    })
      .then((resp) => {
        if (resp.status === 401) throw resp;
        return resp.json();
      })
      .then((user) => {
        props.login(true);
        onSetUsername(user.user);
        onSetUserId(user.uid);
      })
      .catch((err) => {
        setError(err.statusText);
        setTimeout(() => setError(""), 5000);
      });
  };

  return (
    <div>
      <form onSubmit={() => setFetch()}>
        {error ? (
          <Alert severity="error">
            {" "}
            Sorry, something went wrong: <br />
            {error}
          </Alert>
        ) : null}
        <TextField
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        &nbsp;
        <TextField
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        &nbsp;
        <TextField type="submit" />
      </form>
      <br />
      <UserForm login={props.login} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    username: state.login.username,
    loggedIn: state.login.loggedIn,
    user_id: state.login.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetUsername: (username) =>
      dispatch({ type: actionTypes.USERNAME, username: username }),
    onSetUserId: (id) => dispath({ type: actionTypes.USER_ID, userId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
