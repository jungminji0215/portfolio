import AboutMe from "./components/AboutMe";
import Main from "./components/Main";
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
      <section className="bg-gray-300">Projects</section>
      <section className="bg-yellow-300">Career</section>
      <section className="bg-blue-300">Contact Me</section>
    </>
  );
}
