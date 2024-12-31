import React, { useEffect } from "react";
import "./service.css";
import serviceImg1 from "../../assets/homeImage2.jpg";
import serviceImg2 from "../../assets/homeImage6.jpg";
import serviceImg3 from "../../assets/homeImage7.jpg";

const Service = () => {
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
    <div className="service">
      <div className="serviceHead">
        <p className="serviceHeadLeft">
          Our <small>Services</small>
        </p>
        <div className="serviceHeadRight">
          <p>OVERVIEW</p>
          <p>Expert solutions for all your construction needs.</p>
        </div>
      </div>
      <div className="serviceMain">
        <div className="serviceMain1">
          <div className="serviceMain1a">
            <p className="serviceMain1a1">HOME</p>
            <p className="serviceMain1a2">Residential</p>
            <p className="serviceMain1a3">
              Our skilled craftsmen specialize in residential construction.
            </p>
            <p className="serviceMain1a4">LEARN MORE</p>
          </div>
          <div className="serviceMain1b">
            <img src={serviceImg1} alt="" />
          </div>
        </div>
        <div className="serviceMain1">
          <div className="serviceMain1a">
            <p className="serviceMain1a1">BUSINESS</p>
            <p className="serviceMain1a2">Commercial</p>
            <p className="serviceMain1a3">
              We are the ideal choice for commercial construction.
            </p>
            <p className="serviceMain1a4">LEARN MORE</p>
          </div>
          <div className="serviceMain1b">
            <img src={serviceImg2} alt="" />
          </div>
        </div>
        <div className="serviceMain1">
          <div className="serviceMain1a">
            <p className="serviceMain1a1">UPGRADE</p>
            <p className="serviceMain1a2">Renovation</p>
            <p className="serviceMain1a3">
              We specialize in breathing new life into existing spaces.
            </p>
            <p className="serviceMain1a4">LEARN MORE</p>
          </div>
          <div className="serviceMain1b">
            <img src={serviceImg3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
