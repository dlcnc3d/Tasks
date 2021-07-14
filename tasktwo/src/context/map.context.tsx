import React from "react";
import { useContext } from "react";
import { MarkerData } from "../definitions/types";

type State = {
  markerType: Partial<string>;

  startPoint: Partial<MarkerData>;

  finishPoint: Partial<MarkerData>;

  setMarkerType: React.Dispatch<string>;

  setStartPoint: React.Dispatch<MarkerData>;

  setFinishPoint: React.Dispatch<MarkerData>;
};

const MapContext = React.createContext<Partial<State>>({} as State);

export const MapProvider: React.FC = (props) => {
  const [startPoint, setStartPoint] = React.useState(null);
  const [finishPoint, setFinishPoint] = React.useState(null);
  const [markerType, setMarkerType] = React.useState(null);

  const { children } = props;

  return (
    <MapContext.Provider
      value={{
        startPoint,
        setStartPoint,
        finishPoint,
        setFinishPoint,
        markerType,
        setMarkerType,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export const useMapData = () => useContext(MapContext);
