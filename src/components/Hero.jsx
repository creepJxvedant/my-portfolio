import { useState, useEffect,useRef} from "react";
import Header from "./Header";
import { FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const [typedText, setTypedText] = useState("");
    const fullText = "Crrafting robust and scalable Java applications";

    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < fullText.length) {
                setTypedText((prev) => prev + fullText.charAt(index));
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 50);

        return () => clearInterval(typingInterval);
    }, []);

    const HomeRef = useRef(null);

    useEffect(() => {
      const ctx = gsap.context(() => {
          gsap.fromTo(
            HomeRef.current,
              { scale:1,opacity:1},
              {
                scale:1.5,opacity:0,
                duration:1,
                ease:"sine.inOut",
                scrollTrigger: {
                  trigger: HomeRef.current,
                  start: "top 0%",
                  end: "bottom 10%",
                  toggleActions: "play none none reverse",
                  scrub:true
                },
              }
            );
      });
  
      return () => ctx.revert(); 
    }, []);
  
  

    return (
        <div id="home" ref={HomeRef} className="hero-container bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen flex items-center justify-center">
            <Header />
            <div className="glass hero-content flex flex-col md:flex-row items-center justify-center max-w-3xl mx-auto">
                <div className="hero-image place-items-center w-full md:w-1/4 mb-4 md:mb-0">
                    <img
                        src="../../public/images/OIP.jpg"
                        alt="Hero Image"
                        className="rounded-lg shadow-xl hover:shadow-yellow-300/20 transition-shadow duration-300 w-[60%] h-auto"
                    />
                </div>
                <div className="hero-text w-full md:w-2/3 mt-4 md:mt-0 md:ml-8">
                    <h1 className="text-blue-300 text-2xl md:text-4xl font-bold mb-2 md:mb-4 animate-fade-in-down">
                        Welcome to my Portfolio
                    </h1>
                    <p className="text-slate-300 text-sm md:text-lg mb-2 md:mb-4 whitespace-pre-wrap">{typedText}</p>
                    <p className="text-slate-300 text-sm md:text-md mb-4 md:mb-6 animate-fade-in">
                        I am a passionate developer with experience in building high-quality software solutions.
                    </p>
                    <div className="hero-buttons place-content-center flex flex-wrap gap-4">
                        <SocialButton
                            href="https://github.com/creepJxvedant"
                            icon={<FaGithub className="mr-2" />}
                            text="GitHub"
                            className="bg-yellow-300 text-gray-900 hover:bg-yellow-400"
                        />
                        <SocialButton
                            href="https://linkedin.com/in/_icycoldwater"
                            icon={<FaLinkedin className="mr-2" />}
                            text="LinkedIn"
                            className="bg-blue-600 hover:bg-blue-700"
                        />
                        <SocialButton
                            href="https://twitter.com/_icycoldwater"
                            icon={<FaTwitter className="mr-2" />}
                            text="Twitter"
                            className="bg-blue-400 hover:bg-blue-500"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const SocialButton = ({ href, icon, text, className }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center px-3 py-1 md:px-4 md:py-2 rounded-lg shadow-lg transition duration-300 ${className}`}
    >
        {icon}
        {text}
    </a>
);

export default Hero;
