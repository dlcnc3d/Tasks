import React, { useEffect } from "react";
import { Box, Button, FormHelperText, Tooltip } from "@material-ui/core";
import { Autocomplete } from "../Gmap/Autocomplete/Autocomplete";
import { useMapData } from "../../context/map.context";
import { MarkerData } from "../../definitions/types";
import { MarkerType } from "../../definitions/enums";





export const CalculateDistanceForm = () => {
  const { setFinishPoint, setStartPoint } = useMapData();
  const { startPoint, finishPoint } = useMapData();
  const { routesEnabled, setRoutesEnabled } = useMapData();
  

  const getPositionClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position !== null) {
          setStartPoint({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            type: "Start",
          });
        }
      });
    }
  };

  
  const getRoutesEnabled = React.useCallback(() => { 
        setRoutesEnabled(!routesEnabled); 
    alert(routesEnabled);       
    }, []);


    



  const selectHandler = (marker: MarkerData, labeltype: MarkerType) => {
    if (labeltype === MarkerType.Start) {
      setStartPoint({
        lat: marker.lat,
        lng: marker.lng,
        type: "Start",
      });
    } else {
      setFinishPoint({
        lat: marker.lat,
        lng: marker.lng,
        type: "Finish",
      });
    }
  };


  
  return (
    <>
      <Box p={1} />
      <Autocomplete
        onSelect={(data: MarkerData) => selectHandler(data, MarkerType.Start)}
      />

      <FormHelperText id="StartPosition">Start Position</FormHelperText>
      <Box p={1} />
      <Autocomplete
        onSelect={(data: MarkerData) => selectHandler(data, MarkerType.Finish)}
      />
      <FormHelperText id="EndPosition">End Position</FormHelperText>
      <Box p={1} />
      <Tooltip title="Click to get your geolocation posittion">
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={getPositionClick}
        >
          Start poin by Geoposition
        </Button>
      </Tooltip>
      <Box p={2} />
      <Tooltip title="Click to build route">
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={getRoutesEnabled}
        >
          Build route
        </Button>
      </Tooltip>
    </>
  );
};
//getRoutesEnabled,
//setRoutesEnabled,