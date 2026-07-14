import ParticleBackground from "../components/ParticleBackground";
import Navbar from "../components/Navbar"; 
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
// <ThemeSwitcher /> import එක අයින් කළා

export default function Home() {
  return (
    <main className="min-h-screen relative bg-background overflow-hidden text-foreground">
      
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
         <ParticleBackground />
      </div>
      
      {/* <ThemeSwitcher /> මෙතනින් අයින් කළා, මොකද ඒක දැන් Navbar එක ඇතුළේ තියෙනවා */}
      <Navbar />

      <div className="relative z-10 flex flex-col min-h-screen">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>

    </main>
  );
}