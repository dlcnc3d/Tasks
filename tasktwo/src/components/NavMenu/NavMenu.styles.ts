import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const drawerWidth = 200;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
<<<<<<< HEAD
      height: "7vh",
=======
      height: "60px",
>>>>>>> 82c7dd98a3531a8e129ea4663c033e9d763dec09
      backgroundColor: "#596F87",
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    menubutton: {
      marginRight: theme.spacing(1),
<<<<<<< HEAD
=======
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
>>>>>>> 82c7dd98a3531a8e129ea4663c033e9d763dec09
    },
  })
);

<<<<<<< HEAD
export default useStyles;
=======
export default useStyles;
>>>>>>> 82c7dd98a3531a8e129ea4663c033e9d763dec09
