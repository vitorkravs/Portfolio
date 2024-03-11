//styles
import "./styles.scss";

//Animações
import { motion } from "framer-motion";
import { menuAnimation } from "@/animations/menuAnimation";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";
import Link from "next/link";

type MenuNavegationProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  handleClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

const MenuNavegation = ({
  isMenuOpen,
  toggleMenu,
  handleClick,
}: MenuNavegationProps) => {
  //Se o menu estiver ativo, a opção de touchmove(rolagem da página) é desativada.
  useEffect(() => {
    if (isMenuOpen) {
      // Adiciona ouvinte de evento para prevenir scroll
      document.body.style.overflow = "hidden";
    } else {
      // Remove ouvinte de evento para permitir scroll
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);
  return (
    <motion.nav
      initial="closed"
      animate={isMenuOpen ? "opened" : "closed"}
      variants={menuAnimation}
      id="nav-links-container"
      className={isMenuOpen ? "active" : "desktop"}
    >
      <motion.div
        initial="opened"
        animate={isMenuOpen ? "opened" : "closed"}
        variants={menuAnimation}
        id="close-menu-container"
        onClick={toggleMenu}
      >
        <p>Fechar</p>
        <FontAwesomeIcon
          icon={faXmark}
          style={{ fontSize: "180%", color: "white" }}
        />
      </motion.div>

      <span className="border-links"></span>
      <div id="nav-options-container">
        <Link href="/" onClick={handleClick}>
          Home
        </Link>
        <span className="barra">|</span>
        <Link href="#Sobre-mim" onClick={handleClick}>
          Sobre mim
        </Link>
        <span className="barra">|</span>
        <Link href="#Projetos" onClick={handleClick}>
          Meus Projetos
        </Link>
        <span className="barra">|</span>
        <Link href="#Contato" onClick={handleClick}>
          Contato
        </Link>
      </div>
      <span className="border-links"></span>

      <div id="social-networks-container">
        <a
          href="https://www.linkedin.com/in/vitorkravszenko/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icons">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
        </a>
        <a
          href="https://www.github.com/vitorkravs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icons">
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </a>
        <a
          href="https://www.instagram.com/vitorkravs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icons">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </a>
      </div>
    </motion.nav>
  );
};

export default MenuNavegation;
