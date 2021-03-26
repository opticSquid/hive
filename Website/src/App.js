import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Theme from "./Themes/DefaultTheme";
import HomePage from "./Components/HomePage";
import HomePageContent from "./Components/HomePageContent";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Error from "./Components/Error";
const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Switch>
            <Route path="/LoginSignUp">
              <Login />
            </Route>
            <Route path="/signUp">
              <SignUp/>
            </Route>
            <Route path="/error/:err_code/:messege">
              <Error/>
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
