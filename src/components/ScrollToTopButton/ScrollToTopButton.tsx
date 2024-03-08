"use client";

import { FaArrowUp } from "react-icons/fa";

import "./styles.scss";

import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  //Função para detectar a rolagem e definir se o botão é visível
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        // Mudança aqui de pageYOffset para scrollY
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button id="scroll-to-top-button" onClick={ScrollToTop}>
        <FaArrowUp />
      </button>
    )
  );
};

export default ScrollToTopButton;
