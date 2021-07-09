import {
    makeStyles,  
    Theme,
    createStyles,
  } from "@material-ui/core/styles";
  
  
  
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: "flex",
        //position: "center",
        //left: "0px",
        //bottom: "0px",
        //height: "5px",
        width: "100%",
        
        flexDirection: "column",        
        marginleft: "5px",
        padding: "5px",
      }
    }
  ));

  
  
  export default useStyles