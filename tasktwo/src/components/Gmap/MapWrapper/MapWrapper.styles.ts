import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      width: "100%",
      flexDirection: "row",
      marginTop: "0px",
      //padding: "5px",
    },
  })
);

export default useStyles;
