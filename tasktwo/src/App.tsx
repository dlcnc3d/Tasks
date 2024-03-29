import { Dialog, MuiThemeProvider } from "@material-ui/core";
import { defaultTheme } from "./themes/default";
import CssBaseline from "@material-ui/core/CssBaseline";
import NavMenu from "./components/NavMenu/NavMenu";
import { Footer } from "./components/Footer/Footer";
import { SidePanel } from "./components/SidePanel/SidePanel";
import { MapProvider } from "./context/map.context";
import { StrictMode, Suspense, useEffect } from "react";
import { AuthProvider } from "./context/auth.context";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { RegisterForm } from "./components/RegisterForm/RegisterForm";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { Loader } from "./components/Loader/Loader";
import { useState } from "react";
import { useContext } from "react";


//<SidePanel />

function App() {







  return (
    <StrictMode>
      <Router>
        <AuthProvider>
          <MapProvider>
            <MuiThemeProvider theme={defaultTheme}>
              <NavMenu />
              <CssBaseline />
              <main>
              
              <Switch>


             
              
              
              
              <SidePanel />  

              </Switch>


              </main>
              <Footer year={new Date().getFullYear()}> </Footer>
            </MuiThemeProvider>
          </MapProvider>
        </AuthProvider>
      </Router>
    </StrictMode>
  );
}

export default App;
