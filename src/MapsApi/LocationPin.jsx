// import { Icon } from "@iconify/react";
import LocationIcon from "@material-ui/icons/LocationOn";
import React from "react";

export default function LocationPin({ text }) {
  return (
    <div className="pin">
      <LocationIcon className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  );
}
