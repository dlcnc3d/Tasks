/*global google*/
import React, { PropsWithChildren } from "react";
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

type Props = {
  onMapClick: (data: MarkerData) => void;
  children?: React.ReactNode;
};

const MapWrapper = compose<Props, Props>(
  withProps({
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withGoogleMap
)((props) => {
  const { points, routesEnabled } = useMapData();

  const MapClickHandle = (
    e: any
  ) => {
    props.onMapClick({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
      time: Date.now(),
      
    });
  };

  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 49.23, lng: 28.47 }}
      onClick={MapClickHandle}
            


    >
      {points.map((p) => (
        <Marker
          key={p.time}
          position={{ lat: p.lat, lng: p.lng }}
          animation={google.maps.Animation.DROP}
          //label={p.type}
        >
          <InfoWindow>
            <div>{MarkerType[p.type]}</div>
          </InfoWindow>
        </Marker>
      ))}

      <MapRoutes
        startPoint={
          points[points.findIndex((x) => x.type === MarkerType.Start)]
        }
        finishPoint={
          points[points.findIndex((x) => x.type === MarkerType.Finish)]
        }
        enabled={routesEnabled}
      ></MapRoutes>
    </GoogleMap>
  );
});

export default MapWrapper;
