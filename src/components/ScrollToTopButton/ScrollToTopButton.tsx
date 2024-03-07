"use client";

import { FaArrowUp } from "react-icons/fa";

import "./styles.scss";

const ScrollToTopButton = () => {
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
