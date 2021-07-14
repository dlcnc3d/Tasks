import React, { useEffect } from "react";
import { useContext } from "react";
import { MarkerData } from "../../definitions/types";
import { routeHelpers } from "../../Helpers/route.helpers";
import { useMapData } from "../../context/map.context";
import { DirectionsRenderer } from "react-google-maps";

type Props = {
  year: number;
  startPoint:MarkerData;
  finishPoin:MarkerData;
};

export const MapRoutes: React.FC<Props> = (props) => {
  const { startPoint, finishPoin } = props;



  const { routes, routesEnabled } = useMapData();
  const { setRoutes, setRoutesEnabled } = useMapData();

  useEffect(() => {
      
    if (startPoint != null && finishPoin != null) setRoutes(routeHelpers(startPoint, finishPoin));
  });

  return (
    <div >      
      {routesEnabled &&  routes  && <DirectionsRenderer               
               directions={routes as google.maps.DirectionsResult }     
               />}
    </div>
  );
};



