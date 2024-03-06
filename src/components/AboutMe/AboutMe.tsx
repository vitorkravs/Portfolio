"use client";

import TitleContainer from "../TitleContainer/TitleContainer";
//styles
import SlideAboutMe from "./SlideAboutMe";
import "./styles.scss";

//animação
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      id="about-me-container"
    >
      <TitleContainer text="Sobre Mim" />

      <SlideAboutMe />
    </motion.section>
  );
};

export default AboutMe;
