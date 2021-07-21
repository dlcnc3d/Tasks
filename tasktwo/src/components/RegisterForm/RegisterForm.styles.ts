
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Translate } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {

display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(0),
    height: '600px',
    //backgroundColor: "#a1dffb90",

    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '350px',
      height: '50px',

    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },

      
      form: {        
        backgroundColor: "#a1dffb20",        
      }, 

      title: {        
        backgroundColor: "#596F87", 
        
      }, 



      input: {
        width: "90%",
        height: "100%",
        variant: "outlined",
      },
      button: {
        width: "40%",
        height: "100%",
        variant: "outlined",
        margin:"10px",
      },
  })
);

export default useStyles;

