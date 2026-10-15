"use client";

import { useEffect } from "react";

const countDuration = 1800;
const countStagger = 150;

export function BonusNumberAnimation() {
  useEffect(() => {
    const section = document.querySelector<HTMLElement>("#bonus [data-reveal]");
    const mainAmount = section?.querySelector<HTMLElement>("[data-bonus-main]");
    const counters = Array.from(
      section?.querySelectorAll<HTMLElement>("[data-bonus-target]") ?? [],
      (element) => ({ element, value: Number(element.dataset.bonusTarget) }),
    );
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!section || !mainAmount || counters.length === 0 || motionPreference.matches) return;

    let observer: IntersectionObserver | undefined;
    let frame = 0;
    let mainAnimation: Animation | undefined;
    let started = false;

    const showFinalValues = () => {
      counters.forEach(({ element, value }) => {
        element.textContent = String(value);
      });
    };

    const start = () => {
      if (started) return;
      started = true;
      observer?.disconnect();
      if (motionPreference.matches) return;

      counters.forEach(({ element }) => {
        element.textContent = "0";
      });
      mainAnimation = mainAmount.animate(
        [
          { transform: "translateY(0.3em)", opacity: 0 },
          { transform: "translateY(0)", opacity: 1 },
        ],
        { duration: 700, easing: "ease-out" },
      );

      const lastValues = counters.map(() => 0);
      let startedAt: number | undefined;
      const tick = (now: number) => {
        startedAt ??= now;
        const elapsed = now - startedAt;

        counters.forEach(({ element, value: target }, index) => {
          const progress = Math.min(1, Math.max(0, (elapsed - index * countStagger) / countDuration));
          const eased = 1 - (1 - progress) ** 2;
          const value = progress === 1 ? target : Math.round(target * eased);
          if (value !== lastValues[index]) {
            element.textContent = String(value);
            lastValues[index] = value;
          }
        });

        if (elapsed < countDuration + (counters.length - 1) * countStagger) {
          frame = window.requestAnimationFrame(tick);
        } else {
          showFinalValues();
        }
      };
      frame = window.requestAnimationFrame(tick);
    };

    const onMotionChange = () => {
      if (!motionPreference.matches) return;
      started = true;
      observer?.disconnect();
      window.cancelAnimationFrame(frame);
      mainAnimation?.cancel();
      showFinalValues();
    };

    motionPreference.addEventListener("change", onMotionChange);
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) start();
        },
        { threshold: 0.2 },
      );
      observer.observe(section);
    } else {
      start();
    }

    return () => {
      observer?.disconnect();
      motionPreference.removeEventListener("change", onMotionChange);
      window.cancelAnimationFrame(frame);
      mainAnimation?.cancel();
    };
  }, []);

  return null;
}
