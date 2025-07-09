// src/components/HoloName.jsx
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function HoloName({ name }) {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
    );
  }, []);

  return (
    <h1
      ref={ref}
      className="text-5xl md:text-6xl font-extrabold text-cyber-blue drop-shadow-lg"
    >
      {name}
    </h1>
  );
}
