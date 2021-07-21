import React, { useEffect } from "react";
import { MarkerData } from "../../definitions/types";
import { getRouteHelpers } from "../../core/helpers/route.helpers";
import { DirectionsRenderer } from "react-google-maps";
import { useState } from "react";

type Props = {
  startPoint: MarkerData;
  finishPoint: MarkerData;
  enabled: boolean;
};

export const MapRoutes: React.FC<Props> = (props) => {
  const { startPoint, finishPoint, enabled } = props;

  const [routes, setRoutes] = useState<any>(null);

  useEffect(() => {
    if (enabled && startPoint !== null && finishPoint !== null) {
      getRouteHelpers(startPoint, finishPoint).then((result) => {
        setRoutes(result);
      });
    }
  }, [enabled, startPoint, finishPoint]);

  return (
    <div>
      {enabled && routes && (
        <DirectionsRenderer
          directions={routes as google.maps.DirectionsResult}
        />
      )}
    </div>
  );
};
