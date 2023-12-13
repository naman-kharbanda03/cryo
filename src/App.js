import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/about" />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
