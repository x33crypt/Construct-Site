import React, { useState } from "react";
import "./ourblog.css";
import blogImage1 from "../../assets/blogImage1.jpg";
import blogImage2 from "../../assets/blogImage2.jpg";
import blogImage3 from "../../assets/blogImage3.jpg";
import blogImage4 from "../../assets/blogImage4.jpg";
import blogImage5 from "../../assets/blogImage5.jpg";
import blogImage6 from "../../assets/blogImage6.jpg";
import { MdArrowOutward } from "react-icons/md";

const OurBlog = () => {
  const [researchPlusIcon, setResearchPlusIcon] = useState(false);
  const [safetyPlusIcon, setSafetyPlusIcon] = useState(false);
  const [envPlusIcon, setEvnPlusIcon] = useState(false);

  return (
    <div className="ourBlogg">
      <div className="ourBlog">
        <div className="ourBlogHead">
          <p className="ourBlogHeadLeft">
            Our <small>Blog</small>
          </p>
          <div className="ourBlogHeadRight">
            <p>OUR RECENT ARTICLES</p>
            <p>Discover our latest projects and industry insights.</p>
          </div>
        </div>
        <div className="ourBlogMain">
          <div className="ourBlogMain1">
            <div
              className="ourBlogMain1a"
              onMouseEnter={() => setResearchPlusIcon(true)}
              onMouseLeave={() => setResearchPlusIcon(false)}
            >
              <div className="ourBlogMain1a1">
                <img src={blogImage1} alt="" />
                <div
                  className={
                    researchPlusIcon
                      ? "ourBlogMain1a1Iconin"
                      : "ourBlogMain1a1Icon"
                  }
                >
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
              <div className="ourBlogMain1a2">
                <div className="ourBlogMain1a2a">
                  <img src={blogImage4} alt="" />
                  <p>JANET DOE</p>
                </div>
                <div className="ourBlogMain1a2b">
                  <p>RESEARCH</p>
                  <small>DEC 8, 2023</small>
                </div>
              </div>
              <p className="ourBlogMain1a3">Choosing the Right Contractor</p>
            </div>
            <div
              className="ourBlogMain1a"
              onMouseEnter={() => setSafetyPlusIcon(true)}
              onMouseLeave={() => setSafetyPlusIcon(false)}
            >
              <div className="ourBlogMain2a1">
                <img src={blogImage2} alt="" />
                <div
                  className={
                    safetyPlusIcon
                      ? "ourBlogMain1a1Iconin"
                      : "ourBlogMain1a1Icon"
                  }
                >
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
              <div className="ourBlogMain1a2">
                <div className="ourBlogMain1a2a">
                  <img src={blogImage5} alt="" />
                  <p>STEVE DAVIS</p>
                </div>
                <div className="ourBlogMain1a2b">
                  <p>SAFETY</p>
                  <small>DEC 8, 2023</small>
                </div>
              </div>
              <p className="ourBlogMain1a3">
                Creating a Safe Construction Site
              </p>
            </div>
          </div>
          <div className="ourBlogMain2">
            <div
              className="ourBlogMain1a"
              onMouseEnter={() => setEvnPlusIcon(true)}
              onMouseLeave={() => setEvnPlusIcon(false)}
            >
              <div className="ourBlogMain2a1">
                <img src={blogImage3} alt="" />
                <div
                  className={
                    envPlusIcon ? "ourBlogMain1a1Iconin" : "ourBlogMain1a1Icon"
                  }
                >
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
              <div className="ourBlogMain1a2">
                <div className="ourBlogMain1a2a">
                  <img src={blogImage6} alt="" />
                  <p>JOHN SMITH</p>
                </div>
                <div className="ourBlogMain1a2b">
                  <p>ENVIRONMENT</p>
                  <small>DEC 8, 2023</small>
                </div>
              </div>
              <p className="ourBlogMain1a3">Sustainable Building Practices</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ourBlogMid">
        <div className="ourBlogMidMain">
          <p className="ourBlogMidMain1">
            Ready To Get <small>Started?</small>
          </p>
          <p className="ourBlogMidMain2">
            Claim your quote today consectetur adipiscing. Suspendisse varius in
            elementum tristique.
          </p>
          <button className="ourBlogMidMain3">
            GET IN TOUCH <MdArrowOutward className="buttonIcon" />
          </button>
        </div>
      </div>
      <div className="ourBlogButtom"></div>
    </div>
  );
};

export default OurBlog;
