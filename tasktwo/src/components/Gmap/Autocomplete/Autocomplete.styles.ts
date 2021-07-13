import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 40,
      width: "90%",
      position: "relative",
      zIndex: 1,
    },
    rootActive: {
      zIndex: 2,
    },
    autocompleteWrapper: {
      position: "absolute",
      width: "100%",
      height: "auto",
      maxHeight: 200,
      top: "100%",
      left: 0,
      zIndex: 100,
      backgroundColor: "#fff",
      borderRadius: "0 0 5px 5px",
      overflow: "auto",
    },
    autocompleteItem: {
      padding: "5px 10px",
      cursor: "pointer",
    },
    input: {
      width: "100%",
      height: "100%",
    },
  })
);

export default useStyles;
