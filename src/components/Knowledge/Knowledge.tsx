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

const Knowledge = () => {
  const [isActive, setIsActive] = useState(false);

  //altera o estado
  const toggleDisplay = () => {
    setIsActive(!isActive);
  };

  return (
    <section id="knowledge-container">
      <TitleContainer text="Hard Skills" />
      <div id="knowledge">
        <div id="in-this-project">
          <h3>Usados nesse Portfólio:</h3>
          <div id="icons-in-this-project">
            {iconsInThisProject.map(({ id, Icon, skill }) => (
              <p key={id}>
                <Icon className="icons-knowledge" /> {skill}
              </p>
            ))}
          </div>
        </div>
        <div id="general-knowledge">
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
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
