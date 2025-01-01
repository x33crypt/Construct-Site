import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [navOption, setNavOption] = useState(false);
  const currentYear = new Date().getFullYear();

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
          <p>PROJECT</p>
          <p>SHOP</p>
          <p>CONTACT</p>
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
        <div className="navOption1">
          <Link to={"/"} onClick={() => setNavOption(false)}>
            <p>HOME</p>
          </Link>
          <Link to={"/service"} onClick={() => setNavOption(false)}>
            <p>SERVICE</p>
          </Link>
          <Link to={"/blog"} onClick={() => setNavOption(false)}>
            <p>BLOG</p>
          </Link>
          <p onClick={() => setNavOption(false)}>PROJECT</p>
          <p onClick={() => setNavOption(false)}>SHOP</p>
          <p onClick={() => setNavOption(false)}>CONTACT</p>
        </div>
        {/* <div className="navOption2">
          <p className="navOption2Buttom1">
            © {currentYear} Constructs. All Rights Reserved.
          </p>
          <div className="navOption2Buttom2">
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default NavBar;
