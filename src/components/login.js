import React, { useState } from "react";
import { TextField } from "@material-ui/core";

export default function Login(props) {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

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
      .then((resp) => resp.json())
      .then((user) => {
        props.login(true);
        sessionStorage.setItem("loggedIn", "true");
      });
  };

  return (
    <div>
      <form onSubmit={() => setFetch()}>
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
