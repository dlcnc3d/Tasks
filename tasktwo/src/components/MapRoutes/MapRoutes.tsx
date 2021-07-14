import React, { useEffect } from "react";
import { useContext } from "react";
import { MarkerData } from "../../definitions/types";
import { routeHelpers } from "../../Helpers/route.helpers";
import { useMapData } from "../../context/map.context";
import { DirectionsRenderer } from "react-google-maps";

type Props = {
  startPoint:MarkerData;
  finishPoint:MarkerData;
};

export const MapRoutes: React.FC<Props> = (props) => {
  const { startPoint, finishPoint } = props;



  const { routes, routesEnabled } = useMapData();
  const { setRoutes, setRoutesEnabled } = useMapData();



  
  useEffect(() => {
      
    if (startPoint != null && finishPoint != null) setRoutes(routeHelpers(startPoint, finishPoint));
  });

  return (
    <div >      
      {routesEnabled &&  routes  && <DirectionsRenderer               
               directions={routes as google.maps.DirectionsResult }     
               />}
    </div>
  );
};



