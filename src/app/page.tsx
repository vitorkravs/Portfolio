import AboutMe from "@/components/AboutMe/AboutMe";
import Header from "@/components/Header/Header";
import Knowledge from "@/components/Knowledge/Knowledge";
import Projects from "@/components/Projects/Projects";
import { register } from "swiper/element/bundle";
register();

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <AboutMe />
        <Projects />
        <Knowledge />
      </main>
    </>
  );
}
