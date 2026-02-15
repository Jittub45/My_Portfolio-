import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#2d3240]">
      <Navbar />
      <Hero />
      <Works />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
