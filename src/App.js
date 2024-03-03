import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Date from "./pages/about/Date";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/about" />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/date" element={<Date />} /> */}
      </Routes>
    </div>
  );
}

export default App;
