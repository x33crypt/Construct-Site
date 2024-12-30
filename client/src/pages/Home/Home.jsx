import React from "react";
import "./home.css";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import OurService from "../../components/OurService";
import AllProjects from "../../components/AllProjects";
import OurBlog from "../../components/OurBlog";

const Home = () => {
  return (
    <>
      <div className="home">
        <Hero />
        <Projects />
        <OurService />
        <AllProjects />
        <OurBlog />
      </div>
    </>
  );
};

export default Home;
