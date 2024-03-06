"use client";

//styles
import "./styles.scss";

//animação
import { motion } from "framer-motion";

//react hooks
import { useState, useEffect } from "react";

//pegar dados do datoCMS
import { fetchDataFromDatoCMS } from "../Lib/DataCMS";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchDataFromDatoCMS()
      .then((data) => {
        setProjects(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Erro ao obter dados:", error);
      });
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      id="projects-container"
    >
      <div id="title-projects">
        <h2>Meus projetos</h2>
        <span className="border-title"></span>
      </div>
      <div id="projects">
        {projects.slice(0, 4).map((project: any) => (
          <ProjectItem
            key={project.slug}
            title={project.title}
            description={project.description}
            slug={project.slug}
            imgURL={project.imgurl}
            repository={project.repository}
            tecnologias={project.tecnologias}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
