import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AosAnimation = ({
  animation,
  duration = 2000,
  delay = 0,
  offset = 100,
  children,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos={animation}
      data-aos-duration={duration}
      data-aos-delay={delay}
      data-aos-offset={offset}
    >
      {children}
    </div>
  );
};

export default AosAnimation;