import "./App.css";
import Hero from "./components/hero/index";
import Features from "./components/features/Features";
import { ResolveBugs } from "./components/resolve-bugs";

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <Features />
      <ResolveBugs />
    </div>
  );
};

export default App;
