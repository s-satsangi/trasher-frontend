import React, { useState } from "react";

export default function Login() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const setFetch = () => {
    event.preventDefault();
    console.log("setFetch");
    fetch("http://localhost:3000/login", {
      method: "POST",
      credentials: 'include',
      headers: {
          'Access-Control-Allow-Credentials': 'true',
          "Content-Type": "application/json",
          Accept: "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    })
      .then((resp) => resp.json())
      .catch(console.log)
      .then((user) => console.log(user));
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
