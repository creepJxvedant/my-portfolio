import { lazy, useState, useEffect } from "react";
import Loader from "./Loader";
import Hero from './components/Hero';
import './output.css';
import './index.css';

const Features = lazy(() => import('./components/Features'));
const Tools = lazy(() => import('./components/Tools'));
const Project = lazy(() => import('./components/Project'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        Promise.all([
            import('./components/Features'),
            import('./components/Tools'),
            import('./components/Project'),
            import('./components/Footer')
        ]).then(() => setIsLoaded(true));
    }, []);

    if (!isLoaded) {
        return <Loader />;
    }

    return (
        <main className="page overflow-x-hidden scroll-smooth">
            <Hero />
            <div className="page">
                <Features />
            </div>
            <div className="slider-container w-screen min-h-[50vh] max-h-[60vh] flex flex-col place-content-center mt-20 p-6">
                <h1 className='text-3xl font-bold text-center p-8 text-cyan-400'>The Mindset, The skills "You're looking for"</h1>
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
