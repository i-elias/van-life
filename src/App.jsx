import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
      <footer>
        <p>&copy;2022 #VANLIFE</p>
      </footer>
    </div>
  );
}

export default App;
