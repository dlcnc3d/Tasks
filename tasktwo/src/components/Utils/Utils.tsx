
 const [onRoute, setRouteState] = React.useState(false);
 const [markers, setMarkers] = React.useState([]);
 const [coordinates, setCoordinates] = React.useState();
 


function onMapClick(e: any) {

//    if(authCheck)
    getMarker("Start", "Finish", e.latLng.lat(), e.latLng.lng());
    //else  alert("you need to register. Use checkbox")
  }

  type markerData = {
    typeLabel?:string;
    type:string;
    lat:number;
    lng:number;
    time?: Date;
  };

  function getMarker(typeLabel:string, type:string, lat:number, lng:number) {
    if (markers.findIndex((x:markerData) => x.type === type) !== -1) {
      setMarkers(
        markers.map((item) =>
          item.type === type ? { ...item, lat: lat, lng: lng } : item
        )
      );
    } else {
      setMarkers((current) => [
        ...current,
        {
          lat: lat,
          lng: lng,
          time: new Date(),
          type:
            current.findIndex((x:) => x.type === typeLabel) === -1
              ? typeLabel
              : type,
        },
      ]);
    }
    console.log(markers);
  }