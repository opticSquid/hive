import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import Content from "./Pages/Content";
import Error from "./Pages/Error/Error";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/content" element={<Content />} />
        <Route path="*" element={<Error errorMessage="404 not found" />} />
      </Routes>
    </Router>
  );
}

export default App;
