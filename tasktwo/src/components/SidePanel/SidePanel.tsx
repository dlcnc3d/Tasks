import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
<<<<<<< HEAD
import { Box } from "@material-ui/core";
import useStyles from "./SidePanel.styles";
import FormHelperText from "@material-ui/core/FormHelperText";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { Autocomplete } from "../Gmap/Autocomplete/Autocomplete";

type Props = {};

export const SidePanel: React.FC<Props> = (props) => {
  //const { someprops } = props;
=======
import useStyles from "./SidePanel.styles";
import MapWrapper from "../Gmap/MapWrapper/MapWrapper";
import { CalculateDistanceForm } from "../CalculateDistanceForm/CalculateDistanceForm";

type Props = {};

export const SidePanel: React.FC<Props> = (props) => {
>>>>>>> 82c7dd98a3531a8e129ea4663c033e9d763dec09
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Grid container spacing={0}>
          <Grid item xs={3}>
<<<<<<< HEAD
            <Paper className={classes.leftPanel}>
              <Box p={1} />

              <Autocomplete />

              <FormHelperText id="StartPosition">Start Position</FormHelperText>
              <Box p={1} />
              <Autocomplete />
              <FormHelperText id="EndPosition">End Position</FormHelperText>
=======
            <Paper className={classes.LeftPanel}>
              <CalculateDistanceForm />
>>>>>>> 82c7dd98a3531a8e129ea4663c033e9d763dec09
            </Paper>
          </Grid>

          <Grid item xs={9}>
            <Paper className={classes.mainForm}>
<<<<<<< HEAD
              <Box p={50}> </Box>
=======
              <MapWrapper></MapWrapper>
>>>>>>> 82c7dd98a3531a8e129ea4663c033e9d763dec09
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> 82c7dd98a3531a8e129ea4663c033e9d763dec09
