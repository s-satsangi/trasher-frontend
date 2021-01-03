import React, { Component } from "react";
import { Container, TextField } from "@material-ui/core";

export default class UserForm extends Component {
  state = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  };

  createUser = (event) => {
    event.preventDefault();
    const data = {
      first_name: firstname,
      last_name: lastname,
      username: username,
      password: password,
    };
    fetch("localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  inputHandler = (event, keyname) => {
    console.log(event.target.value);
    this.setState({
      [keyname]: event.target.value,
    });
  };

  passwordConfirm = (event) => {
    return event.target.value === this.state.password;
  };

  render() {
    const passwordError = () => (this.passwordConfirm() ? "error" : null);
    return (
      <Container>
        <form onSubmit={this.createUser}>
          <TextField
            label="First Name"
            className="userform"
            onChange={(event) => this.inputHandler(event, "firstname")}
          />
          <br />
          <br />
          <TextField
            label="Last Name"
            className="userform"
            onChange={(event) => this.inputHandler(event, "lastname")}
          />
          <br />
          <br />
          <TextField
            label="Username"
            className="userform"
            onChange={(event) => this.inputHandler(event, "username")}
          />
          <br />
          <br />
          <TextField
            label="Password"
            className="userform"
            type="password"
            onChange={(event) => this.inputHandler(event, "password")}
          />
          <br />
          <br />
          <TextField
            label="Confirm Password"
            className="userform"
            type="password"
            onChange={(event) => this.passwordConfirm(event)}
          />
          <br />
          <br />
          <TextField type="submit" />
        </form>
      </Container>
    );
  }
}
