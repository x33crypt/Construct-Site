import React from "react";
import "./home.css";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import OurService from "../../components/OurService/Ourservice";
import AllProjects from "../../components/AllProjects/AllProjects";
import OurBlog from "../../components/OurBlog/OurBlog";

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
