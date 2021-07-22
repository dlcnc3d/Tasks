import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingTop: "62px",
      width: "100%",
      minWidth:"800px",
    },
    LeftPanel: {
      height: "88vh",
      backgroundColor: "#a1dffb30",
      elevation: "100",
      paddingLeft: "20px",
      paddingRigt: "20px",      
      
    },    
    mainForm: {
      height: "88vh",
      display: "flex",
      flexDirection: "column",
      elevation: "0",
    },
  })
);

export default useStyles;