"use client";

import { FaArrowUp } from "react-icons/fa";

import "./styles.scss";

import { useEffect } from "react";

const ScrollToTopButton = () => {
  useEffect(() => {
    // Importa o polyfill apenas no lado do cliente
    if (typeof window !== "undefined") {
      const smoothscroll = require("smoothscroll-polyfill");
      smoothscroll.polyfill();
    }
  }, []);
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button id="scroll-to-top-button" onClick={ScrollToTop}>
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
