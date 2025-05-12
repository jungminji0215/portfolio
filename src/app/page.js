import AboutMe from '../components/aboutMe/AboutMe';
import Career from '../components/Career';
import Contact from '../components/Contact';
import Main from '../components/Main';
import Project from '../components/Projects';

export default function Home() {
  return (
    <>
      <Main />
      <AboutMe />
      <Project />
      <Career />
      <Contact />
    </>
  );
}
