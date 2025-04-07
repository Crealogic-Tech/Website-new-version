import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header"; // Adjust the path if needed
import Footer from "./Components/Footer";
import Home from "./Components/pages/Home";
import "./index.css"
import ContactSection from "./Components/pages/Contact";
function App() {
  return (
    <Router>
      <Header /> {/* This will always be visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/#about" element={<Home/>} />
        <Route path="/#services" element={<Home />} /> */}
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
      <Footer /> {/* This will always be visible */}
    </Router>
  );
}

export default App;
