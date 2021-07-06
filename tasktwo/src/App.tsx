import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { defaultTheme } from "./themes/default";

import NavMenu from "./components/NavMenu/NavMenu";
import { Footer } from "./components/Footer/Footer";



function App() {
  return (
    <>
      <MuiThemeProvider theme={defaultTheme}>
        <NavMenu />
        <main> </main>

        <div
          style={{
            position: "fixed",
            left: "0px",
            bottom: "0px",
            height: "80px",
            width: "100%",
          }}
        >
          <Footer year={new Date().getFullYear()}> </Footer>
        </div>
      </MuiThemeProvider>
    </>
  );
}

export default App;
