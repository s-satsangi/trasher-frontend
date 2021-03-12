import React, { Component } from "react";
import { Container, TextField } from "@material-ui/core";

export default class UserForm extends Component {
  state = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    passwordConfirm: "",
    submit: false,
    picture: "",
  };

  createUser = (event) => {
    event.preventDefault();
    const data = {
      user: {
        first_name: this.state.firstname,
        last_name: this.state.lastname,
        username: this.state.username,
        password: this.state.password,
        profile_picture: this.state.picture,
      },
    };
    fetch("https://scrapparts.herokuapp.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.status) throw json;
        this.props.login(true);
      })
      .catch((err) => alert(`${err.message}`));
    event.target.reset();
  };

  inputHandler = (event, keyname) => {
    this.setState({
      [keyname]: event.target.value,
    });
  };

  passwordHandler = (event) => {
    this.setState({ passwordConfirm: event.target.value });
    this.state.password === event.target.value
      ? this.setState({ submit: true })
      : this.setState({ submit: false });
  };

  render() {
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
            label="Profile Picture"
            className="picture"
            onChange={(event) => this.inputHandler(event, "picture")}
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
            onChange={(event) => this.passwordHandler(event)}
          />
          <br />
          <br />
          {this.state.submit ? (
            <TextField type="submit" />
          ) : (
            <TextField type="submit" disabled />
          )}
        </form>
      </Container>
    );
  }
}
