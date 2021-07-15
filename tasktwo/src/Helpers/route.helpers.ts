import { MarkerData } from "../definitions/types";

export const getRouteHelpers = function (
  start: MarkerData,
  end: MarkerData
): Promise<any> {
  return new Promise((resolve, reject) => {
    const directionsService = new google.maps.DirectionsService();

    directionsService.route(
      {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.TRANSIT,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          console.log(result);
          resolve(result);
        } else {
          reject(console.error(`error fetching directions ${result}`));
        }
      }
    );
  });
};
