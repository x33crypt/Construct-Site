import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [navOption, setNavOption] = useState(false);

  return (
    <>
      <div className="navBar">
        <div className="navBarLeft">
          <p>CONSTRUCTS</p>
          <i class="fa-solid fa-screwdriver-wrench"></i>
        </div>
        <div className="navBarRight">
          <Link to={"/"}>
            <p>HOME</p>
          </Link>
          <Link to={"/service"}>
            <p>SERVICE</p>
          </Link>
          <Link to={"/blog"}>
            <p>BLOG</p>
          </Link>
          <Link to={"/blog"}>
            <p>PROJECT</p>
          </Link>
          <Link to={"/blog"}>
            <p>SHOP</p>
          </Link>{" "}
          <Link to={"/blog"}>
            <p>CONTACT</p>
          </Link>{" "}
          <i class="fa-solid fa-cart-shopping"></i>
          <small>0</small>
        </div>
        <div className="navBarRight2">
          <div className="navBarRight2c">
            <i class="fa-solid fa-cart-shopping"></i>
          </div>

          <div
            className={navOption ? "navBarRight2aClose" : "navBarRight2a"}
            onClick={() => setNavOption(true)}
          >
            <i class="fa-solid fa-bars"></i>
          </div>
          <div
            className={navOption ? "navBarRight2bClose" : "navBarRight2b"}
            onClick={() => setNavOption(false)}
          >
            <i class="fa-regular fa-circle-xmark"></i>
          </div>
          <small>0</small>
        </div>
      </div>
      <div className={navOption ? "navOption" : "navOptionClose"}>
        <p>HOME</p>
        <p>ABOUT</p>
        <p>SERVICE</p>
        <p>PROJECTS</p>
        <p>BLOG</p>
        <p>CONTACT</p>
      </div>
    </>
  );
};

export default NavBar;
