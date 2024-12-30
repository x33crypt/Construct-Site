import React, { useState } from "react";
import "./ourservice.css";
import homeImage2 from "../assets/homeImage2.jpg";
import homeImage3 from "../assets/homeImage3.jpg";
import homeImage4 from "../assets/imageHome4.svg";
import homeImage5 from "../assets/homeImage5.jpg";
import homeImage6 from "../assets/homeImage6.jpg";
import homeImage7 from "../assets/homeImage7.jpg";
import homeImage8 from "../assets/imageHome5.svg";
import homeImage9 from "../assets/imageHome6.svg";
import homeImage10 from "../assets/homeImage8.jpg";

const OurService = () => {
  const [condoPlusIcon, setCondoPlusIcon] = useState(false);
  const [mallPlusIcon, setMallPlusIcon] = useState(false);
  const [interiorPlusIcon, setInteriorPlusIcon] = useState(false);

  return (
    <div className="ourService">
      <div className="ourServiceHead">
        <p className="ourServiceHeadLeft hiddenComp">
          Our <small>Services</small>
        </p>
        <div className="ourServiceHeadRight">
          <p>OVERVIEW</p>
          <p>Expert solutions for all your construction needs.</p>
        </div>
      </div>
      <div className="ourServiceMain">
        <div className="ourServiceMain1 hiddenComp">
          <div className="ourServiceMain1Up">
            <p className="ourServiceMain1Up-a">Residential</p>
            <div className="ourServiceMain1Up-b"></div>
            <p className="ourServiceMain1Up-c">LEARN MORE</p>
          </div>
          <div className="ourServiceMain1Mid">
            <p>01 Service</p>
          </div>
          <div className="ourServiceMain1Down">
            <img src={homeImage2} alt="" />
          </div>
        </div>
        <div className="ourServiceMain2">
          <div className="ourServiceMain2Up hiddenComp">
            <img src={homeImage3} alt="" />
          </div>
          <div
            className="ourServiceMain2Upp hiddenComp"
            onMouseEnter={() => setCondoPlusIcon(true)}
            onMouseLeave={() => setCondoPlusIcon(false)}
          >
            <div className="ourServiceMain2Upp1">
              <img src={homeImage4} alt="" />
            </div>
            <div className="ourServiceMain2Upp2">
              <p className="ourServiceMain2Upp2a">Houses & Condos</p>
              <p className="ourServiceMain2Upp2b">
                Expert construction and renovation of houses and condos.
              </p>
            </div>
            <div
              className={
                condoPlusIcon ? "ourServiceMain2Upp3in" : "ourServiceMain2Upp3"
              }
            >
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="ourServiceMain2Upp4 hiddenComp">
            <p>Our skilled craftsmen specialize in residential construction.</p>
          </div>
        </div>
        <div className="ourServiceMain3 hiddenComp">
          <div className="ourServiceMain3Up">
            <p className="ourServiceMain3Up-a">Commercial</p>
            <div className="ourServiceMain3Up-b"></div>
            <p className="ourServiceMain3Up-c">LEARN MORE</p>
          </div>
          <div className="ourServiceMain3Mid">
            <p>02 Service</p>
          </div>
          <div className="ourServiceMain3Down">
            <img src={homeImage6} alt="" />
          </div>
        </div>
        <div className="ourServiceMain4">
          <div className="ourServiceMain4Up hiddenComp">
            <img src={homeImage5} alt="" />
          </div>
          <div
            className="ourServiceMain4Upp hiddenComp"
            onMouseEnter={() => setMallPlusIcon(true)}
            onMouseLeave={() => setMallPlusIcon(false)}
          >
            <div className="ourServiceMain4Upp1">
              <img src={homeImage8} alt="" />
            </div>
            <div className="ourServiceMain4Upp2">
              <p className="ourServiceMain4Upp2a">Offices & Malls</p>
              <p className="ourServiceMain4Upp2b">
                Top-quality construction for offices and malls.
              </p>
            </div>
            <div
              className={
                mallPlusIcon ? "ourServiceMain4Upp3in" : "ourServiceMain4Upp3"
              }
            >
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="ourServiceMain4Upp4 hiddenComp">
            <p>We are the ideal choice for commercial construction.</p>
          </div>
        </div>
        <div className="ourServiceMain5 hiddenComp">
          <div className="ourServiceMain5Up">
            <p className="ourServiceMain5Up-a">Renovation</p>
            <div className="ourServiceMain5Up-b"></div>
            <p className="ourServiceMain5Up-c">LEARN MORE</p>
          </div>
          <div className="ourServiceMain5Mid">
            <p>03 Service</p>
          </div>
          <div className="ourServiceMain5Down">
            <img src={homeImage7} alt="" />
          </div>
        </div>
        <div className="ourServiceMain6">
          <div className="ourServiceMain6Up hiddenComp">
            <img src={homeImage10} alt="" />
          </div>
          <div
            className="ourServiceMain6Upp hiddenComp"
            onMouseEnter={() => setInteriorPlusIcon(true)}
            onMouseLeave={() => setInteriorPlusIcon(false)}
          >
            <div className="ourServiceMain6Upp1">
              <img src={homeImage9} alt="" />
            </div>
            <div className="ourServiceMain6Upp2">
              <p className="ourServiceMain6Upp2a">Interiors</p>
              <p className="ourServiceMain6Upp2b">
                Elegant and functional interior design solutions.
              </p>
            </div>
            <div
              className={
                interiorPlusIcon
                  ? "ourServiceMain6Upp3in"
                  : "ourServiceMain6Upp3"
              }
            >
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="ourServiceMain6Upp4 hiddenComp">
            <p>We specialize in breathing new life into existing spaces.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
