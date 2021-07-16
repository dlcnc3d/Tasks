//global google
import React from "react";
import { compose, withProps } from "recompose";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  DirectionsRenderer,
  InfoWindow,
  GoogleMapProps,
} from "react-google-maps";
import { useMapData } from "../../../context/map.context";
import { useState } from "react";
import { MarkerData } from "../../../definitions/types";
import { useEffect } from "react";
import { MapRoutes } from "../../MapRoutes/MapRoutes";
import { MarkerType } from "../../../definitions/enums";


const MapWrapper = compose(
  withProps({
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withGoogleMap
)((props) => {
  const {points, routesEnabled } = useMapData();

  return (
    <GoogleMap defaultZoom={14} defaultCenter={{ lat: 49.23, lng: 28.47 }}>
       {points.map((p) => (
      <Marker
        key={p.type}
        position={{ lat: p.lat, lng: p.lng }}
        //label={p.type}
      >
        <InfoWindow>
          <div>
              {p.type}
          </div>
        </InfoWindow>
      </Marker>
    ))}
      
    

      <MapRoutes
        startPoint={points[points.findIndex((x) => x.type === MarkerType.Start)]}
        finishPoint={points[points.findIndex((x) => x.type === MarkerType.Finish)]}
        enabled={routesEnabled}
      ></MapRoutes>
    </GoogleMap>
  );
});

export default MapWrapper;
