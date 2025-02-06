import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import GetStart from "./pages/GetStart";
import EnableLocation from "./pages/EnableLocation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/get-start" />} />
        <Route path="/get-start" element={<GetStart />} />
        <Route path="/enable-location" element={<EnableLocation />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
