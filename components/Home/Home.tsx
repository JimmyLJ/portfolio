import Hero from "../Hero/Hero";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Project from "../Project/Project";
import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Skills />
      <Project />
      <Experience />
      <Contact />
    </div>
  );
}
