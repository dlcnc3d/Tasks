import {
    makeStyles,  
    Theme,
    createStyles,
  } from "@material-ui/core/styles";
  
  
  
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1,        
        marginleft: "50px",
        padding: "30px",
                width: "100%",
      },
      leftPanel: {
        height: '80vh', 
        backgroundColor:"#a1dffb30",
        elevation:'10',
        paddingLeft: "20px",
      },
      InputElement: {
        variant:'outlined',
        label:'outlined',
        height: '5vh', 
        fullWidth:'true',
      },
      mainForm: {
        height: '80vh', 
        backgroundImage:'url(https://source.unsplash.com/random)',
        elevation:'10',       
      },

    }
  ));

  
  
  export default useStyles