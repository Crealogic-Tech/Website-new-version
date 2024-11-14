import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import About from "./Pages/About/About";
import "./index.css";
import Loader from "./Components/Loader/Loader";

function App() {
  const [loader, setLoader] = useState(true); // Initial state is 'true' to show the loader initially

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false); // Hide the loader after 4.5 seconds
    }, 4500);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="wrapper w-[100%] h-[100%] absolute -z-10 bg-custom-background-gradient ">
      <div className="crm_plugin"></div>
      <div id="content">
        {loader ? (
          <Loader /> // Show the loader until it's hidden after the timeout
        ) : (
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
            </Routes>
          </BrowserRouter>
        )}
      </div>
    </div>
  );
}

export default App;
