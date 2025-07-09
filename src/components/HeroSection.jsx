// src/components/HeroSection.jsx
import { Suspense } from "react";
import HoloName from "./HoloName";
import AvatarCanvas from "./AvatarCanvas";
import { gsap } from "gsap";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-white text-center px-6 bg-black">
      <Suspense fallback={<div>Loading Avatar...</div>}>
        <AvatarCanvas />
      </Suspense>

      <div className="relative z-10">
        <HoloName name="Mir Amaan Ali Khan" />

        <p className="mt-4 font-mono text-matrix-green animate-pulse">
          Welcome, Initializing cyber-defenses...✓
        </p>

        <button
          onClick={() => {
            gsap.to("body", {
              backgroundColor: "#0ff",
              duration: 0.3,
              yoyo: true,
              repeat: 1,
            });
          }}
          className="mt-8 px-6 py-3 bg-cyber-blue hover:scale-105 transition-all font-semibold text-black shadow-lg rounded-xl"
        >
          Reveal My Powers
        </button>
      </div>
    </section>
  );
}
