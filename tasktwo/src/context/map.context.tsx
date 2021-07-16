import React from "react";
import { useContext } from "react";
import { MarkerData } from "../definitions/types";

type State = {
  markerType: string;

  //startPoint: MarkerData;

  //finishPoint: MarkerData;
  
  routes:google.maps.DirectionsResult;

  routesEnabled:boolean;
  
  buttonColor: string;
  
  points:MarkerData[];

  setMarkerType: React.Dispatch<string>;

 // setStartPoint: React.Dispatch<MarkerData>;

  //setFinishPoint: React.Dispatch<MarkerData>
  
  setRoutes: React.Dispatch<google.maps.DirectionsResult>;
  
  setRoutesEnabled: React.Dispatch<boolean>;  
  
  setButtonColor: React.Dispatch<string>;
  
  setPoints: React.Dispatch<MarkerData []>;


};

const MapContext = React.createContext<Partial<State>>({} as State);

export const MapProvider: React.FC = (props) => {
  //const [startPoint, setStartPoint] = React.useState(null);
  //const [finishPoint, setFinishPoint] = React.useState(null);

  const [points, setPoints] = React.useState([]);

  //const [markerType, setMarkerType] = React.useState(null);

  const [routes, setRoutes] = React.useState(null);
  const [routesEnabled, setRoutesEnabled] = React.useState(false);
  
  const [buttonColor, setButtonColor] = React.useState("primary");



  const { children } = props;

  return (
    <MapContext.Provider
      value={{
        
        points,
        setPoints,
        //markerType,
        //setMarkerType,
        routes,
        setRoutes,
        routesEnabled,
        setRoutesEnabled,
        buttonColor,
        setButtonColor


      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export const useMapData = () => useContext(MapContext);
