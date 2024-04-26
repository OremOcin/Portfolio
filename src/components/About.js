import React from "react";
import "../css/about.scss";
import Header from "./Header";
import htmlIcon from "../img/icons/htmlIcon.png";
import cssIcon from "../img/icons/cssIcon.png";
import jsIcon from "../img/icons/jsIcon.png";
import reactIcon from "../img/icons/reactIcon.png";
import nodejsIcon from "../img/icons/nodejsIcon.png";
import csharpIcon from "../img/icons/csharpIcon.png";
import mongodbIcon from "../img/icons/mongodbIcon.png";
import mysqlIcon from "../img/icons/mysqlIcon.png";
import gitIcon from "../img/icons/gitIcon.png";

import cvDl from "../img/Image/cv.pdf";
import cvImage from "../img/Image/cvImage.png";

const About = () => {
  return (
    <div className="aboutFlexContainer">
      <Header />
      <h1 className="aboutFlexContainer__title">A propos de moi</h1>
      <div className="aboutFlexContainer__skillsContainer">
        <h1 className="aboutFlexContainer__title__skills">SKILLS</h1>
        <div className="aboutFlexContainer__skillsBox">
          <img
            className="aboutFlexContainer__skillItem"
            src={htmlIcon}
            alt="html-icon"
          />
          <img
            className="aboutFlexContainer__skillItem"
            src={cssIcon}
            alt="css-icon"
          />
          <img
            className="aboutFlexContainer__skillItem"
            src={jsIcon}
            alt="js-icon"
          />
          <img
            className="aboutFlexContainer__skillItem"
            src={reactIcon}
            alt="react-icon"
          />
          <img
            className="aboutFlexContainer__skillItem"
            src={nodejsIcon}
            alt="nodejs-icon"
          />
          <img
            className="aboutFlexContainer__skillItem"
            src={csharpIcon}
            alt="csharp-icon"
          />
          <img
            className="aboutFlexContainer__skillItem"
            src={mongodbIcon}
            alt="mongodb-icon"
          />
          <img
            className="aboutFlexContainer__skillItem"
            src={mysqlIcon}
            alt="mysql-icon"
          />
          <img
            className="aboutFlexContainer__skillItem"
            src={gitIcon}
            alt="git-icon"
          />
        </div>
      </div>
      <div className="aboutFlexContainer__boxMain">
        <p className="aboutFlexContainer__mainText">
          Salut ! <br /> <br /> Moi c'est Nicolas Mero, je réside dans le
          Sud-Ouest de la France. <br /> <br /> Après avoir occupé plusieurs
          emplois alimentaires, ma curiosité m'a peu à peu guidé vers le monde
          du développement web, une passion naissante. <br /> <br /> Passionné
          de jeux vidéo, de technologie et, bien sûr, de développement web, je
          suis toujours à la recherche de nouvelles découvertes dans ces
          domaines. <br /> <br /> Je vous invite à explorer mon portfolio et à
          partager vos impressions. <br /> <br />
          Vos critiques constructives sont les bienvenues, car elles contribuent
          grandement à mon évolution. <br /> <br /> Au plaisir de lire vos
          retours !
        </p>
      </div>
      <a className="aboutFlexContainer__cvImage" href={cvImage}>
        - Cliquez ici pour visionner mon CV -
      </a>
      <a
        href={cvDl}
        className="aboutFlexContainer__cvDlImage"
        download="../img/Image/cv.pdf"
      >
        Cliquez ici pour télécharger mon CV au format PDF
      </a>
    </div>
  );
};

export default About;
