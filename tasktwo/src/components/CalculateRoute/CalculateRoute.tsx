import React from "react";
import { useContext } from "react";
import { MarkerData } from "../../definitions/types";
//import { MarkerData } from 



export const CalculateRoute = (Start:MarkerData, End:MarkerData)=> {
    const [dataRoute, setdataRoute] = React.useState(null);
    
    const directionsService = new google.maps.DirectionsService();
    const [direction, setDirection] = React.useState(null);

    const origin = Start;
    const destination = End;

    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.TRANSIT,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          console.log(result);
          setDirection(result);

          if (
            result.routes[0].fare !== undefined &&
            typeof result.routes[0].fare !== "undefined"
          ) {
            console.log(result.routes[0].fare.value);
            const dataRoute = {
              fareValue: result.routes[0].fare.value,
              fare: result.routes[0].fare.value,
              distance: result.routes[0].legs[0].distance.text,
              duration: result.routes[0].legs[0].duration.text,
            };
                       
            //setdataRoute(dataRoute);
            console.log(result.routes[0].legs[0].distance.text);
            console.log(result.routes[0].legs[0].duration.text);
          }
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }

