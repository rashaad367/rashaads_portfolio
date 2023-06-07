import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ScrollArrowState: React.FC = () => {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 50;
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;

      if (scrollPosition > threshold) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`arrow3 arrow3-first ${showArrow ? "visible" : "hidden"}`}
      data-aos="fade-in"
      data-aos-duration="3000"
    ></div>
  );
};

export default ScrollArrowState;
