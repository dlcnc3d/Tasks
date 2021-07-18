import { MuiThemeProvider } from "@material-ui/core";
import { defaultTheme } from "./themes/default";
import CssBaseline from "@material-ui/core/CssBaseline";
import NavMenu from "./components/NavMenu/NavMenu";
import { Footer } from "./components/Footer/Footer";
import { SidePanel } from "./components/SidePanel/SidePanel";
import { MapProvider } from "./context/map.context";
import { StrictMode } from "react";

function App() {
  return (
    
    <StrictMode>
    <MapProvider>
      <MuiThemeProvider theme={defaultTheme}>
        <NavMenu />
        <CssBaseline />
        <main>
          <SidePanel />
        </main>
        <Footer year={new Date().getFullYear()}> </Footer>
      </MuiThemeProvider>
    </MapProvider>
    </StrictMode>   
  );
}

export default App;