import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    buttonClick: {
      color: "primary",
    },
    button: {
      width: "20%",
      variant:"contained",
      color: "primary",
      size: "small",

      // padding: "15px",
    },
    input: {
      //width: "20%",
      //flexGrow: 1,
      //display: "flex",
      //flexDirection: "row",




      
      
      

      // padding: "15px",
    },
  })
);

export default useStyles;
