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

type MenuNavegationProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

const MenuNavegation = ({ isMenuOpen, toggleMenu }: MenuNavegationProps) => {
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

      <div id="nav-options-container">
        <a href="/">
          Home<span className="barra">|</span>
        </a>
        <a href="/">
          Sobre mim<span className="barra">|</span>
        </a>
        <a href="/">
          Meus Projetos<span className="barra">|</span>
        </a>
        <a href="/">Contato</a>
      </div>

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
          href="https://www.instagram.com/in/vitorkravs"
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
