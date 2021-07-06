import { MuiThemeProvider } from "@material-ui/core";
import { defaultTheme } from "./themes/default";
import CssBaseline from "@material-ui/core/CssBaseline";
import NavMenu from "./components/NavMenu/NavMenu";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <NavMenu />
      <main> </main>

      <Footer year={new Date().getFullYear()}> </Footer>
    </MuiThemeProvider>
  );
}

export default App;
