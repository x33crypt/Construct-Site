import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Blog from "./pages/Blog/Blog";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
