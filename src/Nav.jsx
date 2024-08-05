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
          <button
                onClick={handleToggleVisibility}
                className={isVisible ? "active" : ""}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
                  <path
                    fill="#6E8098"
                    d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                  />
                </svg>
              </button>
          <div className="triangle"></div>
        </div>
      </div>
    </>
  );
};

export default Nav;
