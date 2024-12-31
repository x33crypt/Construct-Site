import React, { useEffect, useState } from "react";
import "./hero.css";
import Image1 from "../assets/heroImage1.jpg";
import Image2 from "../assets/homeImage9.jpg";

const Hero = () => {
  const [heroImage, setHeroImage] = useState(false);
  const [fade, setFade] = useState(false);

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

  const toggleImage = () => {
    setFade(true); // Trigger fade-out
    setTimeout(() => {
      setHeroImage(!heroImage); // Change the image
      setFade(false); // Trigger fade-in
    }, 500); // Match the CSS transition duration
  };

  return (
    <div className="hero hiddenComp">
      <div className="heroUp ">
        <p className="heroUp1">Top Tier Builders</p>
        <div className="heroUp2"></div>
        <p className="heroUp3">RESIDENTIAL</p>
      </div>
      <div className="heroUpMid">
        <div className="heroUpMid1">
          <p>Construction</p>
        </div>
        <div className="heroUpMid2">
          <p>Experts</p>
        </div>
      </div>
      <div className="heroDown">
        <img
          src={heroImage ? Image1 : Image2}
          className={`heroImage ${fade ? "fade-out" : "fade-in"}`}
          alt="Hero"
        />
        <div className="heroDownIcon">
          <i onClick={toggleImage} className="fa-solid fa-angle-left"></i>
          <i onClick={toggleImage} className="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Hero;
