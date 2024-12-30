import React, { useEffect } from "react";
import "./allprojects.css";
import projectHeadImg from "../../assets/homeImage9.jpg";

const AllProjects = () => {
  useEffect(() => {
    const zoomImage = document.querySelector(".allProjectsUpImgg");
    const handleScroll = () => {
      const imageRect = zoomImage.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate the percentage of the image in view
      const inViewPercent = Math.min(
        Math.max((windowHeight - imageRect.top) / windowHeight, 0),
        1
      );

      // Adjust the scale based on the scroll position, you can tweak this value (scale from 1 to 1.5)
      const scaleValue = 1 + inViewPercent * 0.1;
      zoomImage.style.transform = `scale(${scaleValue})`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="allProjects">
      <div className="allProjectsUp">
        <div className="allProjectsUpImg">
          <img className="allProjectsUpImgg" src={projectHeadImg} />
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
