import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import useStyles from "./SidePanel.styles";
import MapWrapper from "../Gmap/MapWrapper/MapWrapper";
import { CalculateDistanceForm } from "../CalculateDistanceForm/CalculateDistanceForm";

type Props = {};

export const SidePanel: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <Paper className={classes.LeftPanel}>
              <CalculateDistanceForm />
            </Paper>
          </Grid>

          <Grid item xs={9}>
            <Paper className={classes.mainForm}>
              <MapWrapper></MapWrapper>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
