import CssBaseline from "@material-ui/core/CssBaseline";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Input } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import useStyles from "./SidePanel.styles";
import FormHelperText from "@material-ui/core/FormHelperText";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { Autocomplete } from "../Gmap/Autocomplete/Autocomplete";



type Props = {   
  };
  
export const SidePanel: React.FC<Props> = (props) => {
    //const { someprops } = props;
    const classes = useStyles();

return ( 
<div className={classes.root}
>

<div>
  <Grid container spacing={3}>
    <Grid item xs={3}
   >
      <Paper className={classes.leftPanel}                    
      >
       
          <Box p={1} />
          
          
          <Autocomplete/>
          
          <FormHelperText id="StartPosition">Start Position</FormHelperText>
          <Box p={1} />
          <Autocomplete />
          <FormHelperText id="EndPosition">End Position</FormHelperText>          
        
      </Paper>
    </Grid>

    <Grid item xs={9}>

      <Paper className={classes.mainForm}       
      >
      
      <Box p={50}> </Box>

      </Paper>
    </Grid>
  </Grid>
</div>

</div>

);
};













