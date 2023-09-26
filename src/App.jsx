import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import CustomGallery from "./pages/CustomGallery/CustomGallery";
import Calender from "./pages/Calender/Calender";
import About from "./pages/About/About";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<CustomGallery />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
