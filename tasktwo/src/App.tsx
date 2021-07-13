import { MuiThemeProvider } from "@material-ui/core";
import { defaultTheme } from "./themes/default";
import CssBaseline from "@material-ui/core/CssBaseline";
import NavMenu from "./components/NavMenu/NavMenu";
import { Footer } from "./components/Footer/Footer";
import { SidePanel } from "./components/SidePanel/SidePanel";
import { MapProvider } from "./context/map.context";

function App() {
  return (
<<<<<<< HEAD
    <MuiThemeProvider theme={defaultTheme}>
      
      <NavMenu />
      
      <Box p={0} />
      <CssBaseline />

      <main 
      
      >
        <SidePanel/> 

      </main>

      <Footer year={new Date().getFullYear()}> </Footer>
    </MuiThemeProvider>
=======
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
>>>>>>> 82c7dd98a3531a8e129ea4663c033e9d763dec09
  );
}

export default App;