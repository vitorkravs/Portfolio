"use client";

import { useState } from "react";
import { OpenNav } from "../OpenNav";

import "./styles.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
        <div id="logo">Portifólio</div>
        <button id="menu-hamburguer" onClick={toggleMenu}>
          <OpenNav />
        </button>
        <nav id="nav-links" className={isMenuOpen ? "active" : "desktop"}>
          <div id="close-menu" onClick={toggleMenu}>
            <p>Fechar</p>
            <FontAwesomeIcon
              icon={faXmark}
              style={{ fontSize: "180%", color: "white" }}
            />
          </div>
          <span className="border-links"></span>
          <a href="/">Home</a>
          <a href="/">Sobre mim</a>
          <a href="/">Meus Projetos</a>
          <a href="/">Tecnologias</a>
          <a href="/">Contato</a>
          <span className="border-links"></span>
        </nav>
      </div>
      <div id="content-container"></div>
    </header>
  );
};

export default Header;
