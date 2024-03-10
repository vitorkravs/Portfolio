import AboutMe from "@/components/AboutMe/AboutMe";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Knowledge from "@/components/Knowledge/Knowledge";
import Projects from "@/components/Projects/Projects";
import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton";
import { register } from "swiper/element/bundle";
register();

export default function Home() {
  return (
    <>
      <ScrollToTopButton />
      <Header />
      <main>
        <AboutMe />
        <Projects />
        <Knowledge />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
