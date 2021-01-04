import React, { Component } from "react";
import { Container, TextField } from "@material-ui/core";

export default class PostForm extends Component {
  state = {
    text: "",
    image: "",
    location: "",
  };

  createPost = (event) => {
    event.preventDefault();
    const data = {
      post: {
        text: this.state.text,
        image: this.state.image,
        location: this.state.location,
      },
    };
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.status) throw json;
        alert(json.status);
      })
      .catch((err) => alert(`${err.message}`));
    event.target.reset();
  };

  inputHandler = (event, keyname) => {
    this.setState({
      [keyname]: event.target.value,
    });
  };

  render() {
    //a post has a :text, :image, :location
    return (
      <Container>
        <form onSubmit={this.createPost}>
        <TextField 
          required
          label = "Text"
          className = "postform"
          onChange = {(event) => this.inputHandler(event, "text")}
        />
        <br /> <br />
        <TextField 
          required
          label = "Location"
          className = "postform"
          onChange = {(event) => this.inputHandler(event, "location")}
        />
        <br /> <br />
        <TextField 
          required
          label = "Image"
          className = "postform"
          onChange = {(event) => this.inputHandler(event, "image")}
        />
        <br /><br />
        <TextField type = "submit" />
        </form>
      </Container>
    );
  }
}
