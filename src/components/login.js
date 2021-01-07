import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

export default function Login(props) {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("asdf");

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
        resp.json();
      })
      .then((user) => {
        props.login(true);
      })
      .catch((err) => console.log);
  };

  return (
    <div>
      <form onSubmit={() => setFetch()}>
        {error ? <Alert>Generic</Alert> : null}
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
    </div>
  );
}
