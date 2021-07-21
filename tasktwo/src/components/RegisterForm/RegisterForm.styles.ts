
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Translate } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        //justify:"center",
        //paddingTop: "15px",
        //top: "20%",
        //position:"static"
        left: "35%",
        width: "400px",
        height:"520px",
        minWidth:"150px",
        minHeight:"520px",
        borderRadius: "0 0 5px 5px",


      },
      form: {
        minHeight:"520px",
        height: "520px",
        backgroundColor: "#a1dffb20",
        elevation: "100",
        paddingLeft: "30px",
        paddingRigt: "20px",      
        
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
