//global google
import React from "react";
import { compose, withProps } from "recompose";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  DirectionsRenderer,
  InfoWindow,
} from "react-google-maps";

const MapWrapper = compose(
  withProps({
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 49.23, lng: 28.47 }}
  ></GoogleMap>
));

export default MapWrapper;
