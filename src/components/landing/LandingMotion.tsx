"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function LandingMotion() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      lerp: 0.12,
      respectReducedMotion: true,
    });

    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = typeof IntersectionObserver !== "undefined" ? new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-visible", "true");
          observer?.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    ) : null;

    targets.forEach((target) => {
      if (observer) observer.observe(target);
      else target.setAttribute("data-visible", "true");
    });
    document.documentElement.classList.add("motion-ready");

    return () => {
      observer?.disconnect();
      lenis.destroy();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
