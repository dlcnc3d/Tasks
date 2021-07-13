import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      display: "flex",
<<<<<<< HEAD
      //flexDirection: "row",
      flexDirection: "column",
      //marginleft: "5%",
      //padding: "5px",
      justifyContent: "center",
      //alignItems: "center",
      paddingTop: "7vh",
      //containerSpacing:"0",
      width: "100%",
    },
    leftPanel: {
=======
      flexDirection: "column",
      justifyContent: "center",
      paddingTop: "62px",
      width: "100%",
      minWidth:"800px",
    },
    LeftPanel: {
>>>>>>> 82c7dd98a3531a8e129ea4663c033e9d763dec09
      height: "86vh",
      backgroundColor: "#a1dffb30",
      elevation: "100",
      paddingLeft: "20px",
<<<<<<< HEAD
    },
    InputElement: {
      variant: "outlined",
      label: "outlined",
      height: "5vh",
      fullWidth: "true",
    },
=======
      paddingRigt: "20px",      
      
    },    
>>>>>>> 82c7dd98a3531a8e129ea4663c033e9d763dec09
    mainForm: {
      height: "86vh",
      display: "flex",
      flexDirection: "column",
<<<<<<< HEAD
      backgroundImage: "url(https://source.unsplash.com/random)",
=======
>>>>>>> 82c7dd98a3531a8e129ea4663c033e9d763dec09
      elevation: "0",
    },
  })
);

<<<<<<< HEAD
export default useStyles;
=======
export default useStyles;
>>>>>>> 82c7dd98a3531a8e129ea4663c033e9d763dec09
