import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Theme from "./Themes/DefaultTheme";
import HomePage from "./Components/HomePage";
import HomePageContent from "./Components/HomePageContent";
import UserHandler from "./Components/UserHandler";
const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Switch>
            <Route path="/LoginSignUp">
              <UserHandler />
            </Route>
            <HomePage>
              <Route path="/">
                <HomePageContent />
              </Route>
            </HomePage>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
