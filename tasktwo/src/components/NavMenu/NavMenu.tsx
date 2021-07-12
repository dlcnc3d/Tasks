import { useTheme } from "@material-ui/core/styles";

import React from "react";
import clsx from "clsx";

import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";

import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import useStyles from "./NavMenu.styles";

export default function NavMenu() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Menu
          </Typography>

          <Box mr={20} />

          <Box mr={3} alignSelf="right">
            <Button
              className={classes.menubutton}
              color="inherit"
              variant="outlined"
            >
              log in
            </Button>
          </Box>
          <Box mr={3} alignSelf="right">
            <Button className={classes.menubutton} variant="contained">
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Sign in", "Sing Up"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <AccountBoxIcon />
                ) : (
                  <SupervisorAccountIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}