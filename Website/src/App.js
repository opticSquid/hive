import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Error from "./Pages/Error/Error";
function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/error" element={<Error errorMessage="404 not found" />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
