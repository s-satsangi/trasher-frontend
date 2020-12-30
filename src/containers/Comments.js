import { TextField } from "@material-ui/core";
import React from "react";

export default function Comments(props) {
  function commentMapper() {
    return props.comments.map((comment) => (
      <div key={comment.text}>{comment.text}</div>
    ));
  }

  return (
    <div>
      <TextField />
      <div>{commentMapper()}</div>
    </div>
  );
}
