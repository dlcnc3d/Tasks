import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",      
      height: "7vh",
      width: "100%",
      flexDirection: "row",
      marginTop: "0px",      
      paddingTop: "15px",
      backgroundColor: "#596F87",
      justifyContent: "center",
      aligntext: "center",
      component: "p",
      variant: "subtitle2",
      color: "white",
    },
  })
);

export default useStyles;