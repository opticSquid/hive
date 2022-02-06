import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Error from "./Components/Error";
function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/error" element={<Error />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
