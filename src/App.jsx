import { lazy } from "react";
const Hero = lazy(() => import('./components/Hero'));
const Features=lazy(() => import('./components/Features'));
const Tools=lazy(() => import('./components/Tools'));
const Project=lazy(() => import('./components/Project'));
const Footer=lazy(() => import('./components/Footer'));
import './output.css';
import './index.css';
function App() {
    return (
        <main className="page overflow-x-hidden scroll-smooth">
       <Hero></Hero>
       <div className="page">
       <Features></Features> 
       </div>
      
      <div className="slider-container w-screen min-h-[50vh] max-h-[60vh] flex flex-col place-content-center mt-20 p-6">
      <h1 className='text-3xl font-bold text-center p-8 text-cyan-400'>The Mindset, The skills ``You're looking for`` </h1>
     
      <Tools></Tools>
      </div>
        
        <div className="project-container page mt-44">
       <Project></Project>
        </div>

        
        <Footer></Footer>
            </main>
    )
}

export default App;