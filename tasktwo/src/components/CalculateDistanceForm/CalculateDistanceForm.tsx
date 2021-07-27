import React from "react";
import {
  Box,
  Button,
  FormHelperText,
  Input,
  Paper,
  Tooltip,
} from "@material-ui/core";

import LocationOnIcon from "@material-ui/icons/LocationOn";

import { Autocomplete } from "../Gmap/Autocomplete/Autocomplete";
import { useMapData } from "../../context/map.context";
import { MarkerData } from "../../definitions/types";
import { MarkerType } from "../../definitions/enums";
import useStyles from "./CalculateDistanceForm.styles";
import { useAuthData } from "../../context/auth.context";
import { getAddressByLatLngHelper } from "../../core/helpers/geocode.helpers";
import classNames from "classnames";
import { useEffect } from "react";
import Alert from "@material-ui/lab/Alert";
import { RouteDataResult } from "../RouteDataResult/RouteDataResult";

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
  const { error, setError } = useMapData();
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
    setRoutesEnabled(true);
  };

  const DelPointsHandler = () => {
    setPoints([]);
    setRoutesEnabled(false);
    setRoutes(null);
  };

  useEffect(() => {
    if (points.length >= 2) getRoutesEnabled();
    if (currentUser === null) getPositionClick();
  }, [points, currentUser]);

  return (
    <>
      <Box p={1} />
      {currentUser && (
        <Box display="flex" alignItems="stretch">
          <Box flexGrow="1">
            <Autocomplete
              onSelect={(data: MarkerData) => {
                currentUser !== null
                  ? props.selectHandler(
                      data,
                      MarkerType.Start,
                      MarkerType.Start
                    )
                  : alert("You can't use autocoplite. Please log in");
              }}
              address={
                points[points.findIndex((x) => x.type === MarkerType.Start)]
                  ?.address
              }
            />
          </Box>
          <Tooltip title="Click to get your geolocation posittion">
            <Button
              className={classes.button}
              size="large"
              variant="contained"
              color="primary"
              startIcon={<LocationOnIcon />}
              onClick={getPositionClick}
            >
              GEO
            </Button>
          </Tooltip>
        </Box>
      )}
      <FormHelperText id="StartPosition">
        {" "}
        {currentUser !== null
          ? "Start Position"
          : "Start Position has been found by geolocation"}
      </FormHelperText>

      <Box p={1} />

      <Autocomplete
        onSelect={(data: MarkerData) =>
          props.selectHandler(data, MarkerType.Finish, MarkerType.Finish)
        }
        address={
          points[points.findIndex((x) => x.type === MarkerType.Finish)]?.address
        }
      />
      <Box p={1} />
      <FormHelperText id="EndPosition">End Position</FormHelperText>

      <Box p={1} />

      {currentUser && (
        <Box display="flex" alignItems="stretch" paddingRight="20px">
          <Tooltip title="Click to delete all marker on map">
            <Button
              className={classes.buttonClick}
              onClick={DelPointsHandler}
              variant="outlined"
              color={routesEnabled ? "secondary" : "primary"}
              fullWidth
              //size="small"
            >
              Delete points
            </Button>
          </Tooltip>
        </Box>
      )}
      <Box p={2} />

      <RouteDataResult /> 



      {error && !currentUser && (
        <Paper className={classes.errors}>
          <div>
            <Box p={1}>
              <Alert
                //className={classes.input}
                variant="outlined"
                severity="error"
              >
                {error}
              </Alert>
            </Box>
          </div>
        </Paper>
      )}
    </>
  );
};
//getRoutesEnabled,
//setRoutesEnabled,
