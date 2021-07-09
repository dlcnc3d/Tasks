import {
    makeStyles,  
    Theme,
    createStyles,
  } from "@material-ui/core/styles";
  
  
  
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "row",    
        //flexDirection: "column",            
        marginleft: "5px",
        padding: "5px",
        justifyContent: "center",
        alignItems: "center",


                width: "100%",
      },
      leftPanel: {
        height: '90vh', 
        backgroundColor:"#a1dffb30",
        elevation:'10',
        paddingLeft: "20px",
        //display: "flex",
        //flexDirection: "row",
        //alignItems: "stretch",

       
      },
      InputElement: {
        variant:'outlined',
        label:'outlined',
        height: '5vh', 
        fullWidth:'true',
      },
      mainForm: {
        height: '90vh', 
        backgroundImage:'url(https://source.unsplash.com/random)',
        elevation:'10',       
      },

    }
  ));

  
  
  export default useStyles