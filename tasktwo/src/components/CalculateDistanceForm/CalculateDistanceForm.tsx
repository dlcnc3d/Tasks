import React from "react";
import { Box, Button, FormHelperText, Input, Tooltip } from "@material-ui/core";

import LocationOnIcon from "@material-ui/icons/LocationOn";

import { Autocomplete } from "../Gmap/Autocomplete/Autocomplete";
import { useMapData } from "../../context/map.context";
import { MarkerData } from "../../definitions/types";
import { MarkerType } from "../../definitions/enums";
import useStyles from "./CalculateDistanceForm.styles";
import { useAuthData } from "../../context/auth.context";
import { getAddressByLatLngHelper } from "../../core/helpers/geocode.helpers";

type Props = {
  selectHandler: (
    marker: MarkerData,
    typeCheck: MarkerType,
    labeltype: MarkerType
  ) => void;
};

export const CalculateDistanceForm: React.FC<Props> = (props) => {
  //const { setFinishPoint, setStartPoint } = useMapData();
  //const { startPoint, finishPoint } = useMapData();
  const { points, setPoints } = useMapData();
  const { routesEnabled, setRoutesEnabled } = useMapData();
  const { routes, setRoutes } = useMapData();
  const { currentUser } = useAuthData();

  const classes = useStyles();

  const getPositionClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position !== null) {
          props.selectHandler(
            {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
              time: Date.now(),
            },
            MarkerType.Start,
            MarkerType.Start
          );
        }
      });
    }
  };

  const getRoutesEnabled = () => {
    setRoutesEnabled(!routesEnabled);
  };

  const DelPointsHandler = () => {
    setPoints([]);
    setRoutesEnabled(false);
    setRoutes(null);
  };

  return (
    <>
      <Box p={1} />

      <Box display="flex" alignItems="stretch">
        <Autocomplete
          onSelect={(data: MarkerData) => {
            currentUser !== null
              ? props.selectHandler(data, MarkerType.Start, MarkerType.Start)
              : alert("You can't use autocoplite. Please log in");
          }}
          address={points[points.findIndex((x) => x.type === MarkerType.Start)]?.address}
        />

        <Tooltip title="Click to get your geolocation posittion">
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            size="small"
            startIcon={<LocationOnIcon />}
            onClick={getPositionClick}
          ></Button>
        </Tooltip>
      </Box>

      <FormHelperText id="StartPosition">Start Position</FormHelperText>

      <Box p={1} />

      <Autocomplete
        onSelect={(data: MarkerData) =>
          props.selectHandler(data, MarkerType.Finish, MarkerType.Finish)
        }
        address={points[points.findIndex((x) => x.type === MarkerType.Finish)]?.address}
        // markerValue="123"
      />

      <FormHelperText id="EndPosition">End Position</FormHelperText>

      <Box p={1} />

      <Box p={2} />
      <Tooltip title="Click to build route">
        <Button
          className={classes.buttonClick}
          onClick={getRoutesEnabled}
          variant="outlined"
          color={routesEnabled ? "secondary" : "primary"}
          size="small"
        >
          Build route
        </Button>
      </Tooltip>
      <Box p={2} />
      <Tooltip title="Click to delete all marker on map">
        <Button
          className={classes.buttonClick}
          onClick={DelPointsHandler}
          variant="outlined"
          color={routesEnabled ? "secondary" : "primary"}
          size="small"
        >
          Delete points
        </Button>
      </Tooltip>
    </>
  );
};
//getRoutesEnabled,
//setRoutesEnabled,
