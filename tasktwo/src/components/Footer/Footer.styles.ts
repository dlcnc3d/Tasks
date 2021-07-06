import {
    makeStyles,  
    Theme,
    createStyles,
  } from "@material-ui/core/styles";
  
  
  
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        position: "fixed",
        left: "0px",
        bottom: "0px",
        height: "80px",
        width: "100%",
      }
    }
  ));

  
  
  export default useStyles