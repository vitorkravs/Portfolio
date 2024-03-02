//styles
import "./styles.scss";

import Image from "next/image";

//Animação
import { motion } from "framer-motion";

const HeaderContent = () => {
  return (
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
            estudante de Desenvolvimento Web e Tecnologia, com 20 anos de idade,
            atualmente com o foco de aprimorar minhas habilidades enquanto faço
            e estudo Engenharia de Software.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          id="button-img-container"
        >
          <div id="button-content">
            <button>Sobre mim</button>
          </div>
          <div id="img-student-container">
            <Image
              src="/student-on-computer.png"
              width={220}
              height={220}
              alt="Estudante mexendo no computador"
            />
            <a
              href="https://pt.lovepik.com/images/png-vector.html"
              target="_black"
              rel="noopener noreferrer"
            >
              Vetor Png vectors by Lovepik.com
            </a>
          </div>
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
  );
};

export default HeaderContent;
