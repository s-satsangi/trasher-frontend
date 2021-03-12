import { Container, TextField } from "@material-ui/core";
import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import CreateIcon from "@material-ui/icons/Create";
import { makeStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
});

export default class Comments extends Component {
  state = {
    comments: this.props.comments,
    formattedComments: [],
  };

  commentHandler = (event) => {
    event.preventDefault();
    const data = {
      user_id: +window.sessionStorage.getItem("user_id"),
      post_id: this.props.postId,
      text: event.target.text.value,
    };
    fetch("https://scrapparts.herokuapp.com/comments", {
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
      <>
        <span className="br"></span>
        <Container key={comment.text} style={{ display: "flex" }}>
          <Avatar
            style={{ height: "20%", width: "4%" }}
            alt="Remy Sharp"
            src={
              comment.user.profile_picture
                ? comment.user.profile_picture
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwLxFg4DRi0YW-8Vl-foPkVYZDQrVkszRm8g&usqp=CAU"
            }
            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwLxFg4DRi0YW-8Vl-foPkVYZDQrVkszRm8g&usqp=CAU"
          >
            &nbsp;
          </Avatar>
          {comment.text}
        </Container>
      </>
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
