import {
    makeStyles,  
    Theme,
    createStyles,
  } from "@material-ui/core/styles";
  
  
  
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: "flex",
        height: "40px",
        width: "100%",        
        flexDirection: "column",        
        marginleft: "5px",
        padding: "5px",
        backgroundColor:"#596F87",
        
        aligntext:"center",        
        component:"p",
        variant:"subtitle2",
        color:"white",
        
        

      }
    }
  ));

  
  
  export default useStyles