import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Error from "./Pages/Error";
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
