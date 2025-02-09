import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2 } from "lucide-react";
import { BiBulb } from "react-icons/bi";
import { GiPerspectiveDiceFive, GiTeamUpgrade } from "react-icons/gi";
import { ImParagraphCenter } from "react-icons/im";

gsap.registerPlugin(ScrollTrigger);

function Card({ title, para, id }) {
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
        <ul className="flex justify-center list-none gap-3">
          <li className="text-red-500 text-3xl">
            {id === 1 ? (
              <Code2 />
            ) : id === 2 ? (
              <BiBulb />
            ) : id === 3 ? (
              <GiTeamUpgrade />
            ) : id === 4 ? (
              <ImParagraphCenter />
            ) : (
              <GiPerspectiveDiceFive />
            )}
          </li>
          <li className="text-xl max-md:text-sm text-red-500">
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
