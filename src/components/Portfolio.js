import React from "react";
import Header from "./Header";
import "../css/portfolio.scss";

import ecfImage from "../img/ProjectsImage/ecfImage.png";
import countrySearchImage from "../img/ProjectsImage/countrySearchImage.png";
import azertypeImage from "../img/ProjectsImage/azertypeImage.png";
import buttonModule from "../img/ProjectsImage/buttonModuleCssImage.png";
import cardsModule from "../img/ProjectsImage/cardsModuleCssImage.png";

import htmlIcon from "../img/icons/htmlIcon.png";
import cssIcon from "../img/icons/cssIcon.png";
import jsIcon from "../img/icons/jsIcon.png";
import reactIcon from "../img/icons/reactIcon.png";
import nodejsIcon from "../img/icons/nodejsIcon.png";
import csharpIcon from "../img/icons/csharpIcon.png";
import mongodbIcon from "../img/icons/mongodbIcon.png";
import mysqlIcon from "../img/icons/mysqlIcon.png";
import gitIcon from "../img/icons/gitIcon.png";
import phpIcon from "../img/icons/phpIcon.png";

const Portfolio = () => {
  return (
    <div className="portfolioFlexContainer">
      <Header />
      <h1 className="portfolioFlexContainer__title">Mes projets</h1>
      <div className="portfolioFlexContainer__mainBox">
        <div className="portfolioFlexContainer__mainBoxItem">
          <img
            className="portfolioFlexContainer__mainBoxItemImg"
            src={ecfImage}
            alt="Image du projet"
          />
          <h2 className="portfolioFlexContainer__mainBoxItemName">
            Plateforme informative gaming
          </h2>
          <p className="portfolioFlexContainer__mainBoxItemDesc">
            Ce site web est une plateforme informative sur laquelle les
            utilisateurs peuvent s'inscrire et s'informer, mettre en favoris les
            jeux qui les intéressent. <br /> <br />
            Ce projet m'a permis d'apprendre les userSessions, et d'améliorer
            grandement mes compétences dans le web : <br />
            filtrage de données, branchement d'une base de données Mysql.
          </p>
          <a
            className="portfolioFlexContainer__mainBoxItemGit"
            href="https://github.com/OremOcin/Ecf"
          >
            - Lien git - Branche Main
          </a>
          <h3 className="portfolioFlexContainer__mainBoxItemTechTitle">
            Technologies utilisées :
          </h3>
          <p className="portfolioFlexContainer__mainBoxItemDesc">
            <img
              className="portfolioFlexContainer__mainBoxItemTechImage"
              src={htmlIcon}
              alt=""
            />
            <br />
            <img
              className="portfolioFlexContainer__mainBoxItemTechImage"
              src={cssIcon}
              alt=""
            />
            <br />
            <img
              className="portfolioFlexContainer__mainBoxItemTechImage"
              src={jsIcon}
              alt=""
            />
            <br />
            <img
              className="portfolioFlexContainer__mainBoxItemTechImage"
              src={phpIcon}
              alt=""
            />
            <br />
            <img
              className="portfolioFlexContainer__mainBoxItemTechImage"
              src={gitIcon}
              alt=""
            />
          </p>
        </div>
        <div className="portfolioFlexContainer__mainBoxItem">
          <img
            className="portfolioFlexContainer__mainBoxItemImg"
            src={countrySearchImage}
            alt="Image du projet"
          />
          <h2 className="portfolioFlexContainer__mainBoxItemName">
            Web app de recherche de pays
          </h2>
          <p className="portfolioFlexContainer__mainBoxItemDesc">
            Cette mini web app permet de rechercher un pays et d'obtenir sa ou
            ses devises, les langages parlés, ses pays frontaliers et un lien
            google map ciblé sur le pays concerné. <br /> <br />
            Ce projet m'a permis de renforcer mes compétences en requêtes web et
            en gestion des réponses, ainsi qu'en filtrage de données.
          </p>
          <a
            className="portfolioFlexContainer__mainBoxItemGit"
            href="https://github.com/OremOcin/Country-Search.git"
          >
            - Lien git - Branche Master
          </a>
          <h3 className="portfolioFlexContainer__mainBoxItemTechTitle">
            Technologies utilisées :
          </h3>
          <p className="portfolioFlexContainer__mainBoxItemDesc">
            <img
              className="portfolioFlexContainer__mainBoxItemTechImage"
              src={reactIcon}
              alt=""
            />
            <br />
            <img
              className="portfolioFlexContainer__mainBoxItemTechImage"
              src={htmlIcon}
              alt=""
            />
            <br />
            <img
              className="portfolioFlexContainer__mainBoxItemTechImage"
              src={cssIcon}
              alt=""
            />
            <br />
            <img
              className="portfolioFlexContainer__mainBoxItemTechImage"
              src={gitIcon}
              alt=""
            />
          </p>
        </div>
        <div className="portfolioFlexContainer__mainBoxItem">
          <img
            className="portfolioFlexContainer__mainBoxItemImg"
            src={azertypeImage}
            alt="Image du projet"
          />
          <h2 className="portfolioFlexContainer__mainBoxItemName">
            Mini jeu de vitesse de frappe
          </h2>
          <p className="portfolioFlexContainer__mainBoxItemDesc">
            Ce mini jeu propose plus de 80 mots à réécrire pour gagner des
            points, le concept est très basique mais lorsqu'on commence on ne
            s'arrête plus !
          </p>
          <a
            className="portfolioFlexContainer__mainBoxItemGit"
            href="https://github.com/OremOcin/Azertype.git"
          >
            - Lien git - Branche Master
          </a>
          <h3 className="portfolioFlexContainer__mainBoxItemTechTitle">
            Technologies utilisées :
          </h3>
          <p className="portfolioFlexContainer__mainBoxItemDesc">
            <img
              className="portfolioFlexContainer__mainBoxItemTechImage"
              src={reactIcon}
              alt=""
            />
            <br />
            <img
              className="portfolioFlexContainer__mainBoxItemTechImage"
              src={htmlIcon}
              alt=""
            />
            <br />
            <img
              className="portfolioFlexContainer__mainBoxItemTechImage"
              src={cssIcon}
              alt=""
            />
            <br />
            <img
              className="portfolioFlexContainer__mainBoxItemTechImage"
              src={gitIcon}
              alt=""
            />
          </p>
        </div>
        <div className="portfolioFlexContainer__mainBoxItem">
          <img
            className="portfolioFlexContainer__mainBoxItemImg"
            src={buttonModule}
            alt="Image du projet"
          />
          <h2 className="portfolioFlexContainer__mainBoxItemName">
            Module de Boutons personnalisés
          </h2>
          <p className="portfolioFlexContainer__mainBoxItemDesc">
            Un module sur lequel j'enregistre des boutons réutilisables
          </p>
          <a
            className="portfolioFlexContainer__mainBoxItemGit"
            href="https://github.com/OremOcin/Module-button-cards.git"
          >
            - Lien git - Branche Master
          </a>
          <h3 className="portfolioFlexContainer__mainBoxItemTechTitle">
            Technologies utilisées :
          </h3>
          <p className="portfolioFlexContainer__mainBoxItemDesc">
            <img
              className="portfolioFlexContainer__mainBoxItemTechImage"
              src={reactIcon}
              alt=""
            />
            <br />
            <img
              className="portfolioFlexContainer__mainBoxItemTechImage"
              src={htmlIcon}
              alt=""
            />
            <br />
            <img
              className="portfolioFlexContainer__mainBoxItemTechImage"
              src={cssIcon}
              alt=""
            />
            <br />
            <img
              className="portfolioFlexContainer__mainBoxItemTechImage"
              src={gitIcon}
              alt=""
            />
          </p>
        </div>
        <div className="portfolioFlexContainer__mainBoxItem">
          <img
            className="portfolioFlexContainer__mainBoxItemImg"
            src={cardsModule}
            alt="Image du projet"
          />
          <h2 className="portfolioFlexContainer__mainBoxItemName">
            Module de cartes personnalisés
          </h2>
          <p className="portfolioFlexContainer__mainBoxItemDesc">
            Un module sur lequel j'enregistre des cartes réutilisables
          </p>
          <a
            className="portfolioFlexContainer__mainBoxItemGit"
            href="https://github.com/OremOcin/Module-button-cards.git"
          >
            - Lien git - Branche Master
          </a>
          <h3 className="portfolioFlexContainer__mainBoxItemTechTitle">
            Technologies utilisées :
          </h3>
          <p className="portfolioFlexContainer__mainBoxItemDesc">
            <img
              className="portfolioFlexContainer__mainBoxItemTechImage"
              src={reactIcon}
              alt=""
            />
            <br />
            <img
              className="portfolioFlexContainer__mainBoxItemTechImage"
              src={htmlIcon}
              alt=""
            />
            <br />
            <img
              className="portfolioFlexContainer__mainBoxItemTechImage"
              src={cssIcon}
              alt=""
            />
            <br />
            <img
              className="portfolioFlexContainer__mainBoxItemTechImage"
              src={gitIcon}
              alt=""
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
