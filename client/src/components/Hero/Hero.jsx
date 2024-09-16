import React from "react";
import "./hero.css";
import Image1 from "../../assets/heroImage1.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroUp">
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
        <img src={Image1} alt="" />
        <div className="heroDownIcon">
          <i class="fa-solid fa-angle-left"></i>
          <i class="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Hero;
