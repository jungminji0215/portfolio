import AboutMe from "./components/AboutMe";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Project from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="bg-gray-200 h-screen flex items-center justify-center"
      >
        <Main />
      </section>
      <section
        id="about-me"
        className="bg-yellow-200 h-screen flex items-center justify-center"
      >
        <AboutMe />
      </section>
      <section
        id="skills"
        className="bg-gray-200 h-screen flex items-center justify-center"
      >
        <Skills />
      </section>

      <section
        id="projects"
        className="h-screen flex items-center justify-center"
      >
        <Project />
      </section>
      <section
        id="career"
        className="bg-blue-200 h-screen flex items-center justify-center"
      >
        <Career />
      </section>

      <section
        id="contact"
        className="bg-yellow-200 h-screen flex items-center justify-center"
      >
        <Contact />
      </section>
    </>
  );
}
