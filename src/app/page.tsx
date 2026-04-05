import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechLogos from "@/components/TechLogos";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Results from "@/components/Results";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechLogos />
        <Services />
        <About />
        <Process />
        <Results />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
