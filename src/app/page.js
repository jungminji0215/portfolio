import AboutMe from "../components/AboutMe";
import Career from "../components/Career";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Project from "../components/Projects";
import Skills from "../components/Skills";

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
        className="min-h-screen flex items-center justify-center bg-amber-200"
      >
        <AboutMe />
      </section>
      <section
        id="skills"
        className="min-h-screen flex items-center justify-center bg-red-200"
      >
        <Skills />
      </section>

      <section
        id="projects"
        className="min-h-screen flex items-center justify-center bg-blue-200"
      >
        <Project />
      </section>
      <section
        id="career"
        className="min-h-screen flex items-center justify-center bg-green-200"
      >
        <Career />
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center bg-amber-600"
      >
        <Contact />
      </section>
    </>
  );
}
