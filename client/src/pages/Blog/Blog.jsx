import React, { useState, useEffect } from "react";
import "./blog.css";
import blogImage1 from "../../assets/blogImage1.jpg";
import blogImage2 from "../../assets/blogImage2.jpg";
import blogImage3 from "../../assets/blogImage3.jpg";
import blogImage4 from "../../assets/blogImage4.jpg";
import blogImage5 from "../../assets/blogImage5.jpg";
import blogImage6 from "../../assets/blogImage6.jpg";

const Blog = () => {
  const [researchPlusIcon, setResearchPlusIcon] = useState(false);
  const [safetyPlusIcon, setSafetyPlusIcon] = useState(false);
  const [envPlusIcon, setEvnPlusIcon] = useState(false);

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
    <div className="blog">
      <div className="blogHead hiddenComp">
        <p className="blogHeadLeft">
          Our <small>Blog</small>
        </p>
        <div className="blogHeadRight">
          <p>OUR RECENT ARTICLES</p>
          <p>Discover our latest projects and industry insights.</p>
        </div>
      </div>
      <div className="blogMain">
        <div className="ourBlogMain1">
          <div
            className="blogMain1a hiddenComp"
            onMouseEnter={() => setResearchPlusIcon(true)}
            onMouseLeave={() => setResearchPlusIcon(false)}
          >
            <div className="blogMain1a1">
              <img src={blogImage1} alt="" />
              <div
                className={
                  researchPlusIcon ? "blogMain1a1Iconin" : "blogMain1a1Icon"
                }
              >
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="blogMain1a2">
              <div className="blogMain1a2a">
                <img src={blogImage4} alt="" />
                <p>JANET DOE</p>
              </div>
              <div className="blogMain1a2b">
                <p>RESEARCH</p>
                <small>DEC 8, 2023</small>
              </div>
            </div>
            <p className="blogMain1a3">Choosing the Right Contractor</p>
          </div>
          <div
            className="blogMain1a hiddenComp"
            onMouseEnter={() => setSafetyPlusIcon(true)}
            onMouseLeave={() => setSafetyPlusIcon(false)}
          >
            <div className="blogMain2a1">
              <img src={blogImage2} alt="" />
              <div
                className={
                  safetyPlusIcon ? "blogMain1a1Iconin" : "blogMain1a1Icon"
                }
              >
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="blogMain1a2">
              <div className="blogMain1a2a">
                <img src={blogImage5} alt="" />
                <p>STEVE DAVIS</p>
              </div>
              <div className="blogMain1a2b">
                <p>SAFETY</p>
                <small>DEC 8, 2023</small>
              </div>
            </div>
            <p className="blogMain1a3">Creating a Safe Construction Site</p>
          </div>
        </div>
        <div className="blogMain2">
          <div
            className="blogMain1a hiddenComp"
            onMouseEnter={() => setEvnPlusIcon(true)}
            onMouseLeave={() => setEvnPlusIcon(false)}
          >
            <div className="blogMain2a1">
              <img src={blogImage3} alt="" />
              <div
                className={
                  envPlusIcon ? "blogMain1a1Iconin" : "blogMain1a1Icon"
                }
              >
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="blogMain1a2">
              <div className="blogMain1a2a">
                <img src={blogImage6} alt="" />
                <p>JOHN SMITH</p>
              </div>
              <div className="blogMain1a2b">
                <p>ENVIRONMENT</p>
                <small>DEC 8, 2023</small>
              </div>
            </div>
            <p className="blogMain1a3">Sustainable Building Practices</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
