import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ShareIcon from "@material-ui/icons/Share";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCopyLink = () => {
    alert("Copied to clipboard!");
    handleClose();
  };

  return (
    <div>
      <ShareIcon
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
        <MenuItem onClick={handleClose}>Share to Facebook</MenuItem>
        <MenuItem onClick={handleClose}>Share to Instagram</MenuItem>
        <CopyToClipboard text={`localhost:3000/posts/${props.postId}`}>
          <MenuItem onClick={handleCopyLink}>Copy Link</MenuItem>
        </CopyToClipboard>
      </Menu>
    </div>
  );
}
