import AboutMe from "@/components/AboutMe/AboutMe";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Knowledge from "@/components/Knowledge/Knowledge";
import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton";
import { register } from "swiper/element/bundle";
import SectionProjects from "@/components/SectionProjects/SectionProjects";
register();

export default function Home() {
  return (
    <>
      <ScrollToTopButton />
      <Header />
      <main>
        <AboutMe />
        <SectionProjects />
        <Knowledge />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
