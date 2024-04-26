import React, { useState } from "react";
import "../css/header.scss";
import portfolioIcon from "../img/icons/portfolioIcon.png";
import aboutIcon from "../img/icons/aboutIcon.png";
import contactIcon from "../img/icons/contactIcon.png";
import closeIcon from "../img/icons/closeHeaderIcon.png";
import openIcon from "../img/icons/openHeaderIcon.png";

const Header = () => {
  const [newClass, setNewClass] = useState("headerHidden");

  const handleClickCloseHeader = () => {
    setNewClass("headerHidden");
  };
  const handleClickOpenHeader = () => {
    setNewClass("headerVisible");
  };

  return (
    <div className={newClass}>
      <div className="header__head">
        <h1 className="header__title">Nicolas Mero</h1>
        <h2 className="header__title__under">Portfolio</h2>
      </div>
      <div className="navbar">
        <a href="/portfolio">
          <p>Portfolio</p>
          <img className="navbar__Icon" src={portfolioIcon} alt="" />
        </a>
        <a href="/">
          <p>A propos</p>
          <img className="navbar__Icon" src={aboutIcon} alt="" />
        </a>
        <a href="/contact">
          <p>Contact</p>
          <img className="navbar__Icon" src={contactIcon} alt="" />
        </a>
      </div>
      <div className="closeHeaderContainer" onClick={handleClickCloseHeader}>
        <img className="closeHeaderContainer__img" src={closeIcon} alt="" />
      </div>
      <div className="openHeaderContainer" onClick={handleClickOpenHeader}>
        <img className="openHeaderContainer__img" src={openIcon} alt="" />
      </div>
    </div>
  );
};

export default Header;
