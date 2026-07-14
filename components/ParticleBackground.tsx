"use client";

import { useCallback } from "react";
// Version 2 වලට අදාළ නිවැරදි Imports
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from "next-themes";

export default function ParticleBackground() {
  const { resolvedTheme } = useTheme();

  // v2 ක්‍රමයට Engine එක ලෝඩ් කිරීම (කිසිම Error එකක් එන්නේ නෑ)
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  const particleColor = resolvedTheme === "light" ? "#0f172a" : "#ffffff";
  const linkColor = resolvedTheme === "light" ? "#2563eb" : "#3b82f6";

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      // ඔයාගේ කළු පාට Background එකට උඩින් පෙනෙන්න z-0 දීලා තියෙන්නේ
      className="absolute inset-0 z-0 pointer-events-none" 
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            resize: true,
          },
        },
        particles: {
          color: { value: particleColor },
          links: {
            color: linkColor,
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: { enable: false },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 40,
          },
          opacity: { value: 0.4 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 2 } },
        },
        detectRetina: true,
      }}
    />
  );
}