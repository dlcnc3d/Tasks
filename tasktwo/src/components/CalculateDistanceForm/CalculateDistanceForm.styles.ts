import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "row",
      width: "100%",
      

    },
    buttonClick: {
      color: "primary",
      size: "large",
    },
    button: {
      
      width: "30%",
      variant:"contained",
      backgroundColor: "#596F87",
      size: "large",
      padding: "15px",
      marginRight:"20px"
      

    },
    input: {
      //width: "20%",
      //flexGrow: 1,
      //display: "flex",
      //flexDirection: "row",

      // padding: "15px",
    },

    errors:{
      
     // width: "30%",
      //variant:"contained",
      //backgroundColor: "#596F87",
      //size: "large",
      //padding: "15px",
      marginRight:"20px"
      

  },


  })
);

export default useStyles;
