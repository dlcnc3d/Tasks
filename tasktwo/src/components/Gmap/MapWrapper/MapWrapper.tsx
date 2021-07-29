/*global google*/
import React, { PropsWithChildren } from "react";
import { compose, withProps } from "recompose";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { useMapData } from "../../../context/map.context";
import { useAuthData } from "../../../context/auth.context";
import { MarkerData } from "../../../definitions/types";
import { MapRoutes } from "../../MapRoutes/MapRoutes";
import { MarkerType } from "../../../definitions/enums";
import uniqid from 'uniqid';
import { useRef } from "react";

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
  const { error, setError } = useMapData();
  const { currentUser } = useAuthData();
  const ref = useRef();

  console.log(ref);
  

  const MapClickHandle = (e: any) => {
    if (currentUser !== null) {
      props.onMapClick({
        id: uniqid(),
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: Date.now(),
      });
      setError("");
    } else {
      setError("Please sing up or log in");
      setTimeout(() => setError(""), 1000);
    }
  };

  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 49.23, lng: 28.47 }}
      onClick={MapClickHandle}
      ref={ref}
          >
      {points.map((p) => (
        <Marker
          key={p.id}
          position={{ lat: p.lat, lng: p.lng }}
          animation={google.maps.Animation.DROP}
          // noRedraw={true}
        >
          <InfoWindow>
            <div>
              <div>{MarkerType[p.type]}</div>
              <div>{p.address}</div>
            </div>
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
