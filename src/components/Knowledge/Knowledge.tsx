"use client";

//styles
import "./styles.scss";

//components
import TitleContainer from "../TitleContainer/TitleContainer";

//icons
import {
  iconsInThisProject,
  iconsKnowledgeContainer,
  iconsKnowledgeContainerTwo,
} from "./KnowledgeIcons";
import { SlArrowDownCircle, SlArrowUpCircle } from "react-icons/sl";

//hooks
import { useState } from "react";

//animações
import { motion } from "framer-motion";

interface KnowledgeProps {
  idContainer: string;
}

const Knowledge = ({ idContainer }: KnowledgeProps) => {
  const [isActive, setIsActive] = useState(false);

  //altera o estado
  const toggleDisplay = () => {
    setIsActive(!isActive);
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      id={idContainer}
    >
      <TitleContainer text="Hard Skills" />
      <div id="knowledge">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          id="in-this-project"
        >
          <h3>Usados nesse Portfólio:</h3>
          <div id="icons-in-this-project">
            {iconsInThisProject.map(({ id, Icon, skill }) => (
              <p key={id}>
                <Icon className="icons-knowledge" /> {skill}
              </p>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          id="general-knowledge"
        >
          <h3>Conhecimentos Gerais:</h3>

          <div id="icons-knowledge-container">
            {iconsKnowledgeContainer.map(({ id, Icon, skill }) => (
              <p key={id}>
                <Icon className="icons-knowledge" /> {skill}
              </p>
            ))}

            {iconsKnowledgeContainerTwo.map(({ id, Icon, skill }) => (
              <p
                key={id}
                className={
                  isActive
                    ? "active-icons-knowledge"
                    : "desable-icons-knowledge"
                }
              >
                <Icon className="icons-knowledge" /> {skill}
              </p>
            ))}
          </div>
          <button className="btn-knowledge" onClick={toggleDisplay}>
            {isActive ? "Ver menos" : "Veja mais"}
            {isActive ? <SlArrowUpCircle /> : <SlArrowDownCircle />}
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Knowledge;
