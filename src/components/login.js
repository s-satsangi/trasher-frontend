import React, { useState } from "react";

export default function Login() {
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
      .then((user) => console.log("Fuck you humans"));
  };

  return (
    <div>
      <form onSubmit={() => setFetch()}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
