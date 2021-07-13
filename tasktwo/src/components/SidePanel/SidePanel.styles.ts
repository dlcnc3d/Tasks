import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      display: "flex",
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
      height: "86vh",
      backgroundColor: "#a1dffb30",
      elevation: "100",
      paddingLeft: "20px",
    },
    InputElement: {
      variant: "outlined",
      label: "outlined",
      height: "5vh",
      fullWidth: "true",
    },
    mainForm: {
      height: "86vh",
      display: "flex",
      flexDirection: "column",
      backgroundImage: "url(https://source.unsplash.com/random)",
      elevation: "0",
    },
  })
);

export default useStyles;