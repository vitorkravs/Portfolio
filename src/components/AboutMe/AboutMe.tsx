"use client";

//styles
import SlideAboutMe from "./SlideAboutMe";
import "./styles.scss";

//animação
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      id="about-me-container"
    >
      <div id="title-about-me">
        <h2 id="title">Sobre mim</h2>
        <span className="border-title"></span>
      </div>

      <SlideAboutMe />
    </motion.div>
  );
};

export default AboutMe;
