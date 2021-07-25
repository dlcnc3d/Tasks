import React from "react";
import Input from "@material-ui/core/Input";
import { Tooltip } from "@material-ui/core";
import PlacesAutocomplete, {
  geocodeByAddress,
} from "react-places-autocomplete";
import useStyles from "./Autocomplete.styles";
import cls from "classnames";
import { MarkerData } from "../../../definitions/types";


type Props = {
  onSelect: (data: MarkerData) => void;  
 // markerValue:any;
};

export const Autocomplete: React.FC<Props> = (props) => {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: 0,
    lng: 0,
  });

  const classes = useStyles();

  const handleSelect = async (value: string) => {
    const results = await geocodeByAddress(value);
    const result = {
      
      lat: results[0].geometry.location.lat(),
      lng: results[0].geometry.location.lng(),

      


    };
//-----------------------------------------------------------
    console.log(result);
    console.log("------");
    console.log(value);
    


    setAddress(value);
    setCoordinates(result);
    props.onSelect(result);
  };

  const searchOptions = {
    location: new google.maps.LatLng(49.23, 28.48, true),
    radius: 500,
    types: ["address"],
    componentRestrictions: { country: "UA" },
  };

  return (
    <PlacesAutocomplete
      searchOptions={searchOptions}
      //value={props.markerValue}
      value={address}
      onChange={setAddress}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div
          className={cls(classes.root, {
            [classes.rootActive]: suggestions.length > 0,
          })}
        >
          <Tooltip title="Type address">
            <Input
              className={classes.input}
              {...getInputProps({ placeholder: "Type address" })}
            />
          </Tooltip>
          <div className={classes.autocompleteWrapper}>
            {loading ? <div>...loading</div> : null}

            {suggestions.map((suggestion) => {
              const style = {
                backgroundColor: suggestion.active ? "#596F8730" : "#596F8720",
              };
              return (
                <div
                  className={classes.autocompleteItem}
                  {...getSuggestionItemProps(suggestion, { style })}
                >
                  {suggestion.description}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};
