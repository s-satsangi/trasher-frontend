import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ShareIcon from "@material-ui/icons/Share";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
        <MenuItem onClick={handleClose}>Copy Link</MenuItem>
      </Menu>
    </div>
  );
}
