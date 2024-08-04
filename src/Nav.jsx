import { useState } from "react";
import facebook from "./assets/images/icon-facebook.svg";
import pinterest from "./assets/images/icon-pinterest.svg";
import twitter from "./assets/images/icon-twitter.svg";

const Nav = ({handleToggleVisibility, isVisible}) => {
  
  return (
    <>
      <div className={`nav-container ${isVisible ? "visible" : "hidden"}`}>
        <div className="nav">
          <span>SHARE</span>
          <div className="icons">
            <img src={facebook} alt="" />
            <img src={pinterest} alt="" />
            <img src={twitter} alt="" />
          </div>
          <div className="triangle"></div>
        </div>
      </div>
    </>
  );
};

export default Nav;
