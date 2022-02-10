import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import Content from "./pages/Content";
import Error from "./pages/Error/Error";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<App />} />
                <Route path="/content" element={<Content />} />
                <Route path="*" element={<Error errorMessage="404 not found" />} />
            </Routes>
        </Router>
    );
}

export default App;