import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certificate from "@/components/Certificate";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certificate />
      <Contact />
    </div>
  );

}

