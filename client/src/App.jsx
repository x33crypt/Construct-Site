import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Blog from "./pages/Blog/Blog";
import Service from "./pages/Service/Service";

const App = () => {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("showComp");
          }
        });
      },
      { threshold: 0.2 }
    );

    const hiddenElements = document.querySelectorAll(".hiddenComp");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
