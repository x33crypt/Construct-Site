import React, { useEffect } from "react";
import "./allprojects.css";
import projectHeadImg from "../assets/homeImage9.jpg";
import allproject1 from "../assets/allproject1.jpg";
import allproject2 from "../assets/allproject2.jpg";
import allproject3 from "../assets/allproject3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Pagination } from "swiper/modules";

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

  const Projects = [
    { name: "Condo", details: "A contemporary home.", image: allproject1 },
    {
      name: "Mall",
      details: "A modern retail destination.",
      image: allproject3,
    },
    { name: "Resort", details: "A touch of paradise.", image: allproject2 },
  ];

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
      <div className="allProjectsDown">
        <Swiper
          className="swipper-Main"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            1024: {
              slidesPerView: 2.5,
            },
          }}
          modules={[Navigation]}
          navigation
          spaceBetween={0} // Distinctive space between cards
          // One card in view + part of the next card
          pagination={false} // Disable pagination dots
          loop={true} // Enables looping
          slidesOffsetBefore={80} // Padding before the first slide
          slidesOffsetAfter={50} // Padding after the last slide
        >
          {Projects.map((project, index) => (
            <SwiperSlide className="swiper-wrapper" key={index}>
              <div className="allProjectsDown1">
                <div className="allProjectsDown1a">
                  <p className="allProjectsDown1a1">{project.name}</p>
                  <p className="allProjectsDown1a2">{project.details}</p>
                </div>
                <img src={project.image} alt={project.name} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AllProjects;
