import Hero from "../Hero/Hero";
import About from "../About/About";
import Skills from "../Skills/Skills";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Skills />
    </div>
  );
}
