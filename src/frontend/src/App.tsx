import { Toaster } from "@/components/ui/sonner";
import AboutSection from "./components/AboutSection";
import CaseManagerSection from "./components/CaseManagerSection";
import ContactSection from "./components/ContactSection";
import ExternalLinksSection from "./components/ExternalLinksSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PracticeAreasSection from "./components/PracticeAreasSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PracticeAreasSection />
        <ExternalLinksSection />
        <CaseManagerSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}
