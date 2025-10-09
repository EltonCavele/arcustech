"use client";

import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Image from "next/image";
import { Button } from "@heroui/react";

// Conteúdo dos slides
const slides = [
  {
    text: "We saw businesses drowning in data but struggling to make sense of it. Decisions were slow, teams were overwhelmed, and insights were buried.",
    author: "John Doe",
    role: "Founder & CEO",
  },
  {
    text: "That’s when we knew there had to be a better way — a smarter, faster, more intuitive solution.",
    author: "John Doe",
    role: "Founder & CEO",
  },
  {
    text: "So we built a platform that empowers companies to transform raw data into real-time decisions using the power of AI.",
    author: "John Doe",
    role: "Founder & CEO",
  },
];

const loopSlides = [...slides, ...slides];

export function WhyWeStarted() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const animRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);
  const offsetRef = useRef<number>(0);
  const isPausedRef = useRef<boolean>(false);
  const speedPxPerSec = 60;

  const itemWidthRef = useRef<number>(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const firstItem = track.querySelector<HTMLDivElement>("[data-item]");
    if (!firstItem) return;

    itemWidthRef.current = firstItem.getBoundingClientRect().width;

    // Função de animação
    const tick = (ts: number) => {
      if (isPausedRef.current) {
        lastTsRef.current = ts;
        animRef.current = requestAnimationFrame(tick);
        return;
      }

      if (lastTsRef.current != null) {
        const dt = (ts - lastTsRef.current) / 1000; // segundos
        const delta = speedPxPerSec * dt;
        offsetRef.current += delta;
      }
      lastTsRef.current = ts;

      const singleSetWidth = itemWidthRef.current * slides.length;

      if (offsetRef.current >= singleSetWidth) {
        offsetRef.current -= singleSetWidth;
      }

      track.style.transform = `translateX(${-offsetRef.current}px)`;

      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  const nudge = (direction: "left" | "right") => {
    const magnitude = 200;
    if (direction === "left") {
      offsetRef.current += magnitude;
    } else {
      offsetRef.current = Math.max(0, offsetRef.current - magnitude);
    }
  };

  return (
    <section className="flex justify-center flex-col bg-black text-white py-20 px-6 relative">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-14">
        Why We Started
      </h2>

      <div className="mt-6 flex items-center justify-center gap-4">
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={() => nudge("right")}
            className="w-10 h-10 flex cursor-pointer items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition"
            aria-label="Move right"
          >
            <ArrowLeft className="text-white w-5 h-5" />
          </button>

          <div className="relative w-full max-w-5xl mx-auto overflow-hidden  ">
            <div
              ref={trackRef}
              className="flex items-stretch gap-10 will-change-transform"
              aria-live="polite"
            >
              {loopSlides.map((slide, i) => (
                <div
                  key={i}
                  data-item
                  className="flex flex-col justify-center items-center min-w-[80%] sm:min-w-[60%] md:min-w-[50%] lg:min-w-[40%] xl:min-w-[33%] max-w-[40rem] flex-shrink-0 rounded-xl p-6 "
                >
                  <Image
                    src="/img/quote.svg"
                    alt="Alt quote"
                    className="h-20 w-auto max-w-[20rem] object-contain opacity-80 hover:opacity-100 transition"
                    loading="lazy"
                    width={200}
                    height={200}
                  />

                  <p className="text-gray-300 text-center  max-w-[30rem] text-sm leading-relaxed">
                    {slide.text}
                  </p>
                  <div className="mt-6 text-center">
                    <p className="text-blue-400 font-semibold">
                      {slide.author}
                    </p>
                    <p className="text-sm text-gray-500">{slide.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Máscara/blur esquerda */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24">
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
              <div className="absolute inset-0 backdrop-blur-[1px]" />
            </div>

            <div className="pointer-events-none absolute inset-y-0 right-0 w-24">
              <div className="absolute inset-0 bg-gradient-to-l from-black via-black/60 to-transparent" />
              <div className="absolute inset-0 backdrop-blur-[2px]" />
            </div>
          </div>

          <button
            onClick={() => nudge("left")}
            className="w-10 h-10 flex cursor-pointer items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition"
            aria-label="Move left"
          >
            <ArrowRight className="text-white w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="text-center mt-12">
        <Button color="primary">Learn More</Button>
      </div>
    </section>
  );
}
