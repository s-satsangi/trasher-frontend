import { TextField } from "@material-ui/core";
import React, { Component } from "react";

import CreateIcon from "@material-ui/icons/Create";

export default class Comments extends Component {
  state = {
    comments: this.props.comments,
    formattedComments: [],
  };

  commentHandler = (event) => {
    event.preventDefault();
    const data = {
      user_id: 41,
      post_id: this.props.postId,
      text: event.target.text.value,
    };
    fetch("http://localhost:3000/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          comments: [json, ...this.state.comments],
        });
      });
  };

  commentMapper = (comments) => {
    return comments.map((comment) => (
      <div key={comment.text}>{comment.text}</div>
    ));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.commentHandler}>
          <TextField type="text" name="text" />
          <CreateIcon onClick={this.commentHandler} id="comment-button" />
        </form>
        {this.commentMapper(this.state.comments)}
      </div>
    );
  }
}
