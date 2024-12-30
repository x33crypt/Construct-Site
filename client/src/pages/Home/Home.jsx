import React from "react";
import "./home.css";
import Hero from "../../components/hero/Hero";
import Projects from "../../components/projects/Projects";
import OurService from "../../components/ourService/OurService";
import AllProjects from "../../components/allProjects/AllProjects";
import OurBlog from "../../components/ourBlog/OurBlog";

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
