import React from "react";
import { Box, Button, FormHelperText, Tooltip } from "@material-ui/core";
import { Autocomplete } from "../Gmap/Autocomplete/Autocomplete";
import { useMapData } from "../../context/map.context";
import { MarkerData } from "../../definitions/types";
import { MarkerType } from "../../definitions/enums";
import useStyles from "./CalculateDistanceForm.styles";

export const CalculateDistanceForm = () => {
  //const { setFinishPoint, setStartPoint } = useMapData();
  //const { startPoint, finishPoint } = useMapData();
  const { points, setPoints } = useMapData();
  const { routesEnabled, setRoutesEnabled } = useMapData();
  const { buttonColor, setButtonColor } = useMapData();

  const classes = useStyles();

  const getPositionClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position !== null) {          
          setPoints({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            type: MarkerType.Start,
          });
        }
      });
    }
  };

  const getRoutesEnabled = () => {
    setRoutesEnabled(!routesEnabled);
    setButtonColor("secomdary");
  };

  const selectHandler = (
    marker: MarkerData,
    typeCheck: MarkerType,
    labeltype: MarkerType
  ) => {
    if (points.findIndex((x) => x.type === labeltype) !== -1) {
      setPoints(
        points.map((item) =>
          item.type === labeltype
            ? { ...item, lat: marker.lat, lng: marker.lng }
            : item
        )
      );
    } else {
      setPoints([
        ...points,
        {
          lat: marker.lat,
          lng: marker.lng,
          time: Date.now(),
          type:
            points.findIndex((x) => x.type === typeCheck) === -1
              ? typeCheck
              : labeltype,
        },
      ]);
    }
  };

  return (
    <>
      <Box p={1} />
      <Autocomplete
        onSelect={(data: MarkerData) => selectHandler(data, MarkerType.Start, MarkerType.Start)}
      />

      <FormHelperText id="StartPosition">Start Position</FormHelperText>
      <Box p={1} />
      <Autocomplete
        onSelect={(data: MarkerData) => selectHandler(data, MarkerType.Finish, MarkerType.Finish)}
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
          className={classes.buttonClick}
          onClick={getRoutesEnabled}
          variant="outlined"
          color={routesEnabled ? 'secondary' : 'primary'}
          size="small"
        >
          Build route
        </Button>
      </Tooltip>
    </>
  );
};
//getRoutesEnabled,
//setRoutesEnabled,
