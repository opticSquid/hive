import { ThemeProvider, CssBaseline } from "@material-ui/core";
import Theme from "./Themes/DefaultTheme";
import PersistentDrawerLeft from "./Components/HomePage";
const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <div className="App">
        <PersistentDrawerLeft/>
      </div>
    </ThemeProvider>
  );
};

export default App;
