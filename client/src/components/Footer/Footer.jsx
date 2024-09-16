import React from "react";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footerTop">
        <div className="footerTop1">
          <p>CONSTRUCT</p>
          <i class="fa-solid fa-screwdriver-wrench"></i>
        </div>
        <div className="footerTop2">
          <p>About Us</p>
          <p>Blog Post</p>
          <p>Shop</p>
          <p>Agency</p>
        </div>
        <div className="footerTop2">
          <p>Contact</p>
          <p>Team</p>
          <p>Work Load</p>
          <p>Services</p>
        </div>
        <div className="footerTop2">
          <p>Project</p>
          <p>Machinery</p>
          <p>Contact</p>
          <p>Privacy Policy</p>
        </div>
        <div className="footerTop2">
          <p>License</p>
          <p>Terms & Condition</p>
          <p>Instructions</p>
          <p>Challenges</p>
        </div>
      </div>
      <div className="footerMid">
        <p>CONSTRUCT</p>
        <i class="fa-solid fa-screwdriver-wrench"></i>
      </div>
      <div className="footerButtom">
        <p className="footerButtom1">
          © {currentYear} Constructs. All Rights Reserved.
        </p>
        <div className="footerButtom2">
          <i class="fa-brands fa-x-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
