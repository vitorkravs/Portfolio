"use client";

import { useState } from "react";
import Image from "next/image";

import "./styles.scss";

//Icons
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { OpenNavIcon } from "../OpenNavIcon";
import MenuNavegation from "../MenuNavegation/MenuNavegation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//animação
import { motion } from "framer-motion";

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
      <div id="content-container">
        <div id="text-container">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Desenvolvedor Front-end
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            id="infos-container"
          >
            <p>
              Olá devs e recrutadores! Meu nome é Vitor Cesar Kravszenko,
              estudante de Desenvolvimento Web e Tecnologia, com 20 anos de
              idade, atualmente concentrado em aprimorar minhas habilidades
              enquanto estudo Engenharia de Software.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          id="img-perfil-container"
        >
          <Image
            src="/perfil.jpg"
            width={220}
            height={220}
            alt="Foto de perfil"
            className="img-perfil"
          />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
