import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { defaultTheme } from "./themes/default";

function App() {
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <div></div>
    </MuiThemeProvider>
  );
}

export default App;
