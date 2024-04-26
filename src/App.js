import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
