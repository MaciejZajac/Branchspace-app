import React from "react";
import { GOOGLE_KEY } from "../keys";
import GoogleMapReact from "google-map-react";
import { useSelector } from "react-redux";
import { SShowOnMap } from "../selectors";

const Component = ({ text }) => {
  if (!text) {
    return null;
  }
  return <div className="home__map-info">{text}</div>;
};

const Map = () => {
  const place = useSelector(SShowOnMap);

  const mapProps = {
    center: {
      lat: place ? place.coordinates.lat : 50.071057,
      lng: place ? place.coordinates.lng : 19.9231331
    },
    zoom: 15
  };

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: GOOGLE_KEY }}
      center={mapProps.center}
      zoom={mapProps.zoom}
    >
      <Component
        lat={place ? place.coordinates.lat : 50.071057}
        lng={place ? place.coordinates.lng : 19.9231331}
        text={place ? place.location : null}
      />
    </GoogleMapReact>
  );
};

export default Map;
