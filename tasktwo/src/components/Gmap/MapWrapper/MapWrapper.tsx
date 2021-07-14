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

const MapWrapper = compose(
  withProps({
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withGoogleMap
)((props) => {
  const { startPoint, finishPoint } = useMapData();

  return (
    <GoogleMap defaultZoom={14} defaultCenter={{ lat: 49.23, lng: 28.47 }}>
      {startPoint ? (
        <Marker
          key={startPoint.type ? "Start" : startPoint.type}
          position={{
            lat: startPoint.lat,
            lng: startPoint.lng,
          }}
        >
          <InfoWindow>
            <div>{startPoint.type}</div>
          </InfoWindow>
        </Marker>
      ) : null}

      {finishPoint ? (
        <Marker
          key={startPoint.type ? "Finish" : startPoint.type}
          position={{
            lat: finishPoint.lat,
            lng: finishPoint.lng,
          }}
        >
          <InfoWindow>
            <div>{finishPoint.type}</div>
          </InfoWindow>
        </Marker>
      ) : null}


            <MapRoutes
            startPoint={startPoint}
            finishPoint={finishPoint}
            >
            </MapRoutes>


    </GoogleMap>
  );
});

export default MapWrapper;
