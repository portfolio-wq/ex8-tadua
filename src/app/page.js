import About from "@/components/About";
import Contact from "@/components/Contact";
import Exp from "@/components/Exp";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Projects />
      <Exp />
      <Contact />
    </main>
  );
}
