import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import UserForm from "../containers/UserForm";

export default function Login(props) {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const setFetch = () => {
    event.preventDefault();
    console.log("setFetch");
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      credentials: "include",
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
        props.setUsername(user.user);
        props.setUserId(user.uid);
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
