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
      user: {
        first_name: this.state.firstname,
        last_name: this.state.lastname,
        username: this.state.username,
        password: this.state.password,
      },
    };
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.status) throw json;
        alert("change to redirect later");
      })
      .catch((err) => alert(`${err.message}`));
    event.target.reset();
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
            required
            label="First Name"
            className="userform"
            onChange={(event) => this.inputHandler(event, "firstname")}
          />
          <br />
          <br />
          <TextField
            required
            label="Last Name"
            className="userform"
            onChange={(event) => this.inputHandler(event, "lastname")}
          />
          <br />
          <br />
          <TextField
            required
            label="Username"
            className="userform"
            onChange={(event) => this.inputHandler(event, "username")}
          />
          <br />
          <br />
          <TextField
            required
            label="Password"
            className="userform"
            type="password"
            onChange={(event) => this.inputHandler(event, "password")}
          />
          <br />
          <br />
          <TextField
            required
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
