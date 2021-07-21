import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { MarkerData } from "../definitions/types";


type State = {
  markerType: string;

  routes: google.maps.DirectionsResult;

  routesEnabled: boolean;

  buttonColor: string;

  points: MarkerData[];

  setMarkerType: React.Dispatch<string>;

  setRoutes: React.Dispatch<google.maps.DirectionsResult>;

  setRoutesEnabled: React.Dispatch<boolean>;

  setButtonColor: React.Dispatch<string>;

  setCurrentUser: React.Dispatch<any>;

  setPoints: React.Dispatch<MarkerData[]>;
};

const MapContext = React.createContext<Partial<State>>({} as State);

export const MapProvider: React.FC = (props) => {
  const [points, setPoints] = React.useState([]);
  const [routes, setRoutes] = React.useState(null);
  const [routesEnabled, setRoutesEnabled] = React.useState(false);
  const { children } = props;

  return (
    <MapContext.Provider
      value={{
        points,
        setPoints,
        routes,
        setRoutes,
        routesEnabled,
        setRoutesEnabled,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export const useMapData = () => useContext(MapContext);
