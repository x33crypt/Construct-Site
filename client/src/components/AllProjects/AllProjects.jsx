import React from "react";
import "./allprojects.css";
import projectHeadImg from "../../assets/homeImage9.jpg";

const AllProjects = () => {
  // window.addEventListener("scroll", () => {
  //   const scrollPosition = window.scrollY;
  //   const maxScroll =
  //     document.documentElement.scrollHeight - window.innerHeight;
  //   const scrollPercentage = scrollPosition / maxScroll;

  //   // Calculate darkness at the bottom based on scroll (from 0.4 to 0.9)
  //   const bottomDarkness = 0.4 + scrollPercentage * 0.5; // Varies between 0.4 and 0.9
  //   const gradient = `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, ${bottomDarkness}))`;

  //   document.querySelector(".allProjectsUpMain").style.background = gradient;
  // });

  return (
    <div className="allProjects">
      <div className="allProjectsUp">
        <div className="allProjectsUpImg">
          <img src={projectHeadImg} />
        </div>
        <div className="allProjectsUpMain">
          <p className="allProjectsUpMain1">
            All <small>Projects</small>
          </p>
          <p className="allProjectsUpMain2">OUR LATEST</p>
          <p className="allProjectsUpMain3">
            800+ projects realized, enhancing homes, businesses, and more.
          </p>
        </div>
      </div>
      <div className="allProjectsDown"></div>
    </div>
  );
};

export default AllProjects;
