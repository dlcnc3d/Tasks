import { Box, FormHelperText } from "@material-ui/core";
import { Autocomplete } from "../Gmap/Autocomplete/Autocomplete";

export const CalculateDistanceForm = () => {
  return (
    <>
      <Box p={1} />
      <Autocomplete />
      <FormHelperText id="StartPosition">Start Position</FormHelperText>

      <Box p={1} />

      <Autocomplete />
      <FormHelperText id="EndPosition">End Position</FormHelperText>
    </>
  );
};
