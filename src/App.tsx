import { useEffect } from "react";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Programs from "./components/sections/Programs";
import Dashboard from "./components/sections/Dashboard";
import Faculty from "./components/sections/Faculty";
import Success from "./components/sections/Success";
import Enroll from "./components/sections/Enroll";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";
import ChatbotOrb from "./components/ChatbotOrb";

export default function App() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Dashboard />
        <Faculty />
        <Success />
        <Enroll />
        <Contact />
      </main>
      <Footer />
      <ChatbotOrb />
    </div>
  );
}
