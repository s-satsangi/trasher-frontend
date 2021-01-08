import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Columns from "../containers/Columns";
import PostForm from "./PostForm";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    <Columns renderCenter={<PostForm />} />;
    handleClose();
  };

  const handleCopyLink = () => {
    alert("Copied to clipboard!");
    handleClose();
  };

  const handleDelete = () => {};

  return (
    <div>
      <MoreVertIcon
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {props.user === +window.sessionStorage.getItem("user_id") ? (
          <MenuItem onClick={handleEdit}>Edit</MenuItem>
        ) : (
          <MenuItem>Message {props.user}</MenuItem>
        )}
        {props.user === +window.sessionStorage.getItem("user_id") ? (
          <MenuItem onClick={handleClose}>Delete</MenuItem>
        ) : null}
        <CopyToClipboard text={`localhost:3000/posts/${props.postId}`}>
          <MenuItem onClick={handleCopyLink}>Copy Link</MenuItem>
        </CopyToClipboard>
      </Menu>
    </div>
  );
}
