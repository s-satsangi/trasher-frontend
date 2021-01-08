import React, { Component } from "react";
import { Container, TextField } from "@material-ui/core";
import PostLayout from "../containers/PostLayout";
import { Redirect } from "react-router-dom";

export default class PostForm extends Component {
  state = {
    text: "",
    image: null,
    location: "",
    redirect: false,
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
        // if (json.status) throw json;
        // alert(json.status);
        console.log("success", json);
        this.setState({
          redirect: true,
        });
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
        {this.state.redirect ? <Redirect to="/home/feed" /> : null}
        <img src={this.state.image} />
        <form onSubmit={this.createPost}>
          <TextField
            required
            label="Text"
            className="postform"
            onChange={(event) => this.inputHandler(event, "text")}
          />
          <br /> <br />
          <TextField
            required
            label="Location"
            className="postform"
            onChange={(event) => this.inputHandler(event, "location")}
          />
          <br /> <br />
          <TextField
            required
            label="Image"
            className="postform"
            onChange={(event) => this.inputHandler(event, "image")}
          />
          <br />
          <br />
          <TextField type="submit" />
        </form>
      </Container>
    );
  }
}
