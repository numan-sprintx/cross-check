import "./App.css";
import Hero from "./components/hero/index";
import Features from "./components/features/Features";
import { ResolveBugs } from "./components/resolve-bugs";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import PromoBanner from "./components/PromoBanner";
import TestimonialSection from "./components/TestimonialSection";
import UnifiedViewSection from "./components/UnifiedViewSection";

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <Features />
      <ResolveBugs />
      <UnifiedViewSection />
      <TestimonialSection />
      <FAQSection />
      <PromoBanner />
      <Footer />
    </div>
  );
};

export default App;
