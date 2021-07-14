import React from "react";
import { useContext } from "react";
import { MarkerData } from "../definitions/types";

type State = {
  markerType: Partial<string>;

  startPoint: MarkerData;

  finishPoint: MarkerData;
  
  routes:any

  routesEnabled:Partial<boolean>

  setMarkerType: React.Dispatch<string>;

  setStartPoint: React.Dispatch<MarkerData>;

  setFinishPoint: React.Dispatch<MarkerData>
  
  setRoutes: React.Dispatch<any>;
  
  setRoutesEnabled: React.Dispatch<boolean>;

  



};

const MapContext = React.createContext<Partial<State>>({} as State);

export const MapProvider: React.FC = (props) => {
  const [startPoint, setStartPoint] = React.useState(null);
  const [finishPoint, setFinishPoint] = React.useState(null);
  //const [markerType, setMarkerType] = React.useState(null);

  const [routes, setRoutes] = React.useState(null);
  const [routesEnabled, setRoutesEnabled] = React.useState(false);




  const { children } = props;

  return (
    <MapContext.Provider
      value={{
        startPoint,
        setStartPoint,
        finishPoint,
        setFinishPoint,
        //markerType,
        //setMarkerType,
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
