import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Card({ title, para }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        gsap.fromTo(
            cardRef.current,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: cardRef.current,
                start: "top 80%",
                end: "bottom 200px",
                toggleActions: "play none none reverse",
                scrub: 1,
              },
            }
          );
          
          
    });

    return () => ctx.revert(); 
  }, []);

  return (
    <div
      ref={cardRef}
      className="w-2/3 rounded-2xl text-center max-sm:w-11/12 md:w-5/12 lg:w-3/12 text-pretty text-slate-300 card"
    >
      <div className="head pt-4">
        <ul className="flex justify-center list-none">
          <li className="text-2xl">🔥</li>
          <li>
            <strong>{title}</strong>
          </li>
        </ul>
      </div>
      <div className="bottom p-3">
        <p>{para}</p>
      </div>
    </div>
  );
}

export default Card;
