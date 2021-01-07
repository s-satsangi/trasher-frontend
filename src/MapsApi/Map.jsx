import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";

export default function Map({ location, zoomLevel }) {
  return (
    <div className="map">
      <h2 className="map-h2">This is the map component. Hi!</h2>

      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "", language: "en" }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
}
