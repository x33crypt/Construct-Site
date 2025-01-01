import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./intro.css";

const Intro = () => {
  const [isIntro, setIsIntro] = useState(true);

  const location = useLocation();

  useEffect(() => {
    setIsIntro(true);

    const timer = setTimeout(() => {
      setIsIntro(false); // End animation after 1 second (match your CSS animation duration)
    }, 2000); // Adjust this duration to match your animation

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, [location]);

  return (
    <div className={`intro ${!isIntro ? "closeIntro" : ""}`}>
      <p>CONSTRUCTS</p>
      <i class="fa-solid fa-screwdriver-wrench"></i>
    </div>
  );
};

export default Intro;
