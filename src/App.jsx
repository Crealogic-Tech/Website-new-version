import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import About from "./Pages/About/About";

function App() {
  return (
    <div className="w-[100%] h-[100%] absolute -z-10 bg-red-500  ">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
