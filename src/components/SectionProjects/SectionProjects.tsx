"use client";

//styles
import "./styles.scss";

//animação
import { motion } from "framer-motion";

//react hooks
import { useState, useEffect } from "react";

//pegar dados do datoCMS
import { fetchDataFromDatoCMS } from "../Lib/DataCMS";
import ProjectItem from "../ProjectItem/ProjectItem";
import TitleContainer from "../TitleContainer/TitleContainer";
import Link from "next/link";

interface SectionProjectsProps {
  idContainer: string;
}

const SectionProjects = ({ idContainer }: SectionProjectsProps) => {
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
      id={idContainer}
    >
      <TitleContainer text="Meus Projetos" />
      <div id="projects-cards">
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
      <Link href="/Projects" className="go-all-projects">
        Veja todos os projetos
      </Link>
    </motion.section>
  );
};

export default SectionProjects;
