
export const  getRouteDatahelper = (routes: google.maps.DirectionsResult):string=> {

if (routes!== null)
{
    const RouteData ={
        fare: routes.routes[0].fare.value,
        duration:(Math.round(routes.routes[0].legs[0].duration.value) / 60).toFixed(0),
        distance: (Math.round(routes.routes[0].legs[0].distance.value) / 1000).toFixed(0)    }
        
return (
    `cost - ${RouteData.fare} UAH, 
    duration - ${RouteData.duration} min, 
    distance - ${RouteData.distance} km,     
    transfers (approximate) - ${((RouteData.fare === 5 || RouteData.fare === 4 || RouteData.fare === 10) ? 0 : RouteData.fare/12.1) }                
    ` )}
else
return("")
}






