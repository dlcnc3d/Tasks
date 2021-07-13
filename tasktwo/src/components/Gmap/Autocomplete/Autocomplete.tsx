import React from "react";
import Input from "@material-ui/core/Input";
import { Tooltip } from "@material-ui/core";
import PlacesAutocomplete, {
  geocodeByAddress,
} from "react-places-autocomplete";
<<<<<<< HEAD
=======
import useStyles from "./Autocomplete.styles";
import cls from "classnames";
import { useMapData } from "../../../context/map.context";
>>>>>>> 82c7dd98a3531a8e129ea4663c033e9d763dec09

type Props = {};

export const Autocomplete: React.FC<Props> = (props) => {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: 0,
    lng: 0,
  });

<<<<<<< HEAD
=======
  const {
    setStartPoint,
  } = useMapData();

  const classes = useStyles();

>>>>>>> 82c7dd98a3531a8e129ea4663c033e9d763dec09
  const handleSelect = async (value: string) => {
    const results = await geocodeByAddress(value);
    const latLng = results[0].geometry.location.lng();
    const result = {
      lat: results[0].geometry.location.lat(),
      lng: results[0].geometry.location.lng(),
    };

    setAddress(value);
    setCoordinates(result);
<<<<<<< HEAD
    console.log(latLng);
=======
    setStartPoint({
      lat: result.lat,
      lng: result.lng
    })
>>>>>>> 82c7dd98a3531a8e129ea4663c033e9d763dec09
  };

  const searchOptions = {
    location: new google.maps.LatLng(49.23, 28.48, true),
    radius: 500,
    types: ["address"],
    componentRestrictions: { country: "UA" },
  };

  return (
<<<<<<< HEAD
    <div>
      <PlacesAutocomplete
        searchOptions={searchOptions}
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <Tooltip title="Type address">
              <Input {...getInputProps({ placeholder: "Type address" })} />
            </Tooltip>
            <div style={{ borderRadius: 35 }}>
              {loading ? <div>...loading</div> : null}

              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active
                    ? "#596F8730"
                    : "#596F8720",
                  borderRadius: 5,
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};
=======
    <PlacesAutocomplete
      searchOptions={searchOptions}
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
>>>>>>> 82c7dd98a3531a8e129ea4663c033e9d763dec09
