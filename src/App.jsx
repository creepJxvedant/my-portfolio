import { lazy, useState, useEffect } from "react";
import Loader from "./Loader";
import "./output.css";
import "./index.css";
const Features = lazy(() => import("./components/Features"));
const Tools = lazy(() => import("./components/Tools"));
const Project = lazy(() => import("./components/Project"));
const Footer = lazy(() => import("./components/Footer"));
const ScrollWatcher = lazy(() => import("./components/ScrollWatcher"));
const Hero = lazy(() => import("./components/Hero"));
function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    Promise.all([
      import("./components/Hero"),
      import("./components/Features"),
      import("./components/Tools"),
      import("./components/Project"),
      import("./components/Footer"),
      import("./components/ScrollWatcher"),
    ]).then(() => setIsLoaded(true));
  }, []);

  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <main className="page overflow-x-hidden scroll-smooth">
      <ScrollWatcher></ScrollWatcher>
      <Hero />
      <div className="page">
        <Features />
      </div>
      <div className="slider-container w-screen min-h-[50vh] max-h-[60vh] flex flex-col place-content-center mt-20 p-6">
        <h1 className="text-3xl max-md:text-xl font-bold text-center p-8 text-blue-700">
          The Mindset, The skills "You're looking for"
        </h1>
        <Tools />
      </div>
      <div className="project-container page mt-44">
        <Project />
      </div>
      <Footer />
    </main>
  );
}

export default App;
