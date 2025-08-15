import "./App.css";
import Hero from "./components/hero/index";
import Features from "./components/features/Features";
import { ResolveBugs } from "./components/resolve-bugs";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import PromoBanner from "./components/PromoBanner";

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <Features />
      <ResolveBugs />
      <FAQSection />
      <PromoBanner />
      <Footer />
    </div>
  );
};

export default App;
