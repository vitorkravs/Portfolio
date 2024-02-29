"use client";

import { useState } from "react";

import "./styles.scss";

//Icons
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { OpenNavIcon } from "../OpenNavIcon";
import MenuNavegation from "../MenuNavegation/MenuNavegation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  //gerencia o estado do menu: ativo(true) ou desativado(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //altera o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  return (
    <header>
      <div id="nav-container">
        <div id="logo">
          <p>Home</p>
          <FontAwesomeIcon icon={faHouse} />
        </div>
        <button id="menu-hamburguer" onClick={toggleMenu}>
          <OpenNavIcon />
        </button>
        <MenuNavegation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
      <div id="content-container"></div>
    </header>
  );
};

export default Header;
