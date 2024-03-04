//styles
import SlideAboutMe from "./SlideAboutMe";
import "./styles.scss";

const AboutMe = () => {
  return (
    <div id="about-me-container">
      <div id="title-about-me">
        <h2 id="title">Sobre mim</h2>
        <span className="border-title"></span>
      </div>

      <SlideAboutMe />
    </div>
  );
};

export default AboutMe;
