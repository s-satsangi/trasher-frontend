import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Columns from "../containers/Columns";
import PostForm from "./PostForm";

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
        {props.user === 41 ? (
          <MenuItem onClick={handleEdit}>Edit</MenuItem>
        ) : (
          <MenuItem>Message {props.user}</MenuItem>
        )}
        {props.user === 41 ? (
          <MenuItem onClick={handleClose}>Delete</MenuItem>
        ) : null}
        <MenuItem onClick={handleClose}>Copy Link</MenuItem>
      </Menu>
    </div>
  );
}
