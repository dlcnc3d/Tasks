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
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import { LoginForm } from "../LoginForm/LoginForm";
import { useAuthData } from "../../context/auth.context";


export default function NavMenu() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);  
  const { currentUser, logOut } = useAuthData();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [openSignUp, setOpenSignUp] = React.useState(false);
  const [openLogIn, setOpenLogIn] = React.useState(false);
  
  const handleClickOpenSignUp = () => {
    if (openLogIn) 
    {
      setOpenLogIn(false);
    }  
    setOpenSignUp(true);
  };

  const handleClickOpenLogIn = () => {
    if (openSignUp) 
    {
      setOpenSignUp(false);
    }    
    setOpenLogIn(true);    
  };

  const handleClickLogOut = () => {
    logOut();    
  };



  const handleClose = () => {
    setOpenSignUp(false);
    setOpenLogIn(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
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
          
          <Typography variant="h6" noWrap className={classes.title}>
            Menu
          </Typography>
          
          <Typography
          
          className={classes.userSign}
          color= {currentUser===null?"secondary": "inherit"}
          variant ={currentUser===null?"h5": "h6"}          
           >
            {currentUser===null?"unregisterd user": currentUser.email}        
            </Typography>
        

          <Box mr={2}>
            <Button
              className={classes.menubutton}
              color="inherit"
              variant="outlined"
              onClick={currentUser===null? handleClickOpenLogIn: handleClickLogOut}
            >
          {currentUser===null? "Log in": "Log Out"}              
            </Button>
            
            <Dialog
              open={openLogIn}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <LoginForm onClose={handleClose} />
            </Dialog>
            
          </Box>
  

          <Box mr={3} >
            <Button
              
              variant="contained"
              onClick={handleClickOpenSignUp}
            >
              Sign Up
            </Button>
            <Dialog
              open={openSignUp}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <RegisterForm onClose={handleClose} />
            </Dialog>

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
          <ListItem button key={"Log in"} onClick={currentUser===null? handleClickOpenLogIn: handleClickLogOut}>
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText 
            primary={currentUser===null? "Log in": "Log Out"}
            />
          </ListItem>
          <ListItem button key={"Sign Up"} onClick={handleClickOpenSignUp}>
            <ListItemIcon>
              <SupervisorAccountIcon />
            </ListItemIcon>
            <ListItemText primary={"Sign Up"} />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}
