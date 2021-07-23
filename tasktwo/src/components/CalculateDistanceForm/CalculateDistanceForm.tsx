import React from "react";
import { Box, Button, FormHelperText, Tooltip } from "@material-ui/core";
import { Autocomplete } from "../Gmap/Autocomplete/Autocomplete";
import { useMapData } from "../../context/map.context";
import { MarkerData } from "../../definitions/types";
import { MarkerType } from "../../definitions/enums";
import useStyles from "./CalculateDistanceForm.styles";
import { useAuthData } from "../../context/auth.context";


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
      <Autocomplete
        onSelect={(data: MarkerData) => {
          currentUser !== null
            ? props.selectHandler(data, MarkerType.Start, MarkerType.Start)
            : alert("You can't use autocoplite. Please log in");
           
        }}
        markerValue="123"
        //markerValue={points[0].lat===null?"0":points[0].lat.toString}
      />

      <FormHelperText id="StartPosition">Start Position</FormHelperText>
      <Box p={1} />
      <Autocomplete
        onSelect={(data: MarkerData) =>
          props.selectHandler(data, MarkerType.Finish, MarkerType.Finish)
        }
        markerValue="123"
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
