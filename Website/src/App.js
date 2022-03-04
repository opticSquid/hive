import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Content from "./pages/Content/Content";
import Error from "./pages/Error/Error";
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
