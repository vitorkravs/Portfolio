"use client";

import { useState } from "react";

import "./styles.scss";

//Icons
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { OpenNavIcon } from "../OpenNavIcon";
import MenuNavegation from "../MenuNavegation/MenuNavegation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderContent from "../HeaderContent/HeaderContent";

interface HeaderProps {
  idContainer: string;
}

const Header = ({ idContainer }: HeaderProps) => {
  //gerencia o estado do menu: ativo(true) ou desativado(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //altera o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Verifica se a largura da janela é menor que 900px
    if (window.innerWidth < 900) {
      toggleMenu();
    }
  };

  return (
    <header id={idContainer}>
      <div id="nav-container">
        <div id="logo">
          <p>Portifólio</p>
          <FontAwesomeIcon icon={faBook} />
        </div>
        <button id="menu-hamburguer" onClick={toggleMenu}>
          <OpenNavIcon />
        </button>
        <MenuNavegation
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          handleClick={handleClick}
        />
      </div>

      <HeaderContent />
    </header>
  );
};

export default Header;
