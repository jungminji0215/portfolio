import Main from "./components/Main";

export default function Home() {
  return (
    <>
      <section className="w-11/12 max-w-3xl mx-auto h-screen flex items-center justify-center">
        <Main />
      </section>
      <section className="bg-red-300">About Me</section>
      <section className="bg-orange-300">Skills</section>
      <section className="bg-gray-300">Projects</section>
      <section className="bg-yellow-300">Career</section>
      <section className="bg-blue-300">Contact Me</section>
    </>
  );
}
