import { useState, useEffect } from "react";

export default function ScrollWatcher() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed z-50 bottom-5 right-4 w-16 h-16 flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 36 36">
        <circle
          className="text-white stroke-current"
          strokeWidth="4"
          strokeLinecap="round"
          fill="transparent"
          r="16"
          cx="18"
          cy="18"
          strokeDasharray="100"
          strokeDashoffset={`${100 - scrollPercent}`}
        />
      </svg>
      <span className="text-xs font-bold text-white">
        {Math.round(scrollPercent)}%
      </span>
    </div>
  );
}
