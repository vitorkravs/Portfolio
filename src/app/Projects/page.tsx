"use client";

//style
import "@/components/SectionProjects/styles.scss";

//animação
import { motion } from "framer-motion";

//react hooks
import { useState, useEffect } from "react";

//pegar dados do datoCMS
import { fetchDataFromDatoCMS } from "@/components/Lib/DataCMS";
import ProjectItem from "@/components/ProjectItem/ProjectItem";
import TitleContainer from "@/components/TitleContainer/TitleContainer";
import Link from "next/link";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchDataFromDatoCMS()
      .then((data) => {
        setProjects(data);
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
      <TitleContainer text="Todos meus Projetos" />
      <div id="projects">
        {projects.map((project: any) => (
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
      <Link href="../" className="go-home">
        Voltar para Home
      </Link>
    </motion.section>
  );
};

export default Projects;
