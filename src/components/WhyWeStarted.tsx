"use client";

import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@heroui/react";

const slides = [
  {
    text: "We saw businesses drowning in data and disjointed systems. SaaS, web, and mobile experiences were fragmented, slowing decisions and burying insights.",
    author: "Jorge Simango",
    role: "Founder & CEO",
  },
  {
    text: "We envisioned a better path: unified SaaS platforms, robust web applications, and intuitive mobile apps working together—smarter, faster, and effortless.",
    author: "Arnaldo simango",
    role: "Cofounder",
  },
  {
    text: "So we built integrated solutions that turn raw data into real-time decisions—SaaS in the cloud, web at scale, and mobile on the go.",
    author: "Arcio Simango",
    role: "CFO",
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

    const tick = (ts: number) => {
      if (isPausedRef.current) {
        lastTsRef.current = ts;
        animRef.current = requestAnimationFrame(tick);
        return;
      }

      if (lastTsRef.current != null) {
        const dt = (ts - lastTsRef.current) / 1000;
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
    <section className="relative flex flex-col bg-black px-4 py-16 text-white sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Why We Started
        </h2>

        <div className="mt-10 flex w-full flex-col items-center gap-6">
          <div className="flex w-full items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => nudge("right")}
              className="hidden h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-gray-700 sm:flex"
              aria-label="Move right"
            >
              <ArrowLeft className="h-5 w-5 text-white" />
            </button>

            <div className="relative mx-auto w-full max-w-5xl overflow-hidden">
              <div
                ref={trackRef}
                className="flex items-stretch gap-6 will-change-transform sm:gap-8 lg:gap-10"
                aria-live="polite"
              >
                {loopSlides.map((slide, i) => (
                  <div
                    key={i}
                    data-item
                    className="flex min-w-[85%] max-w-[40rem] flex-shrink-0 flex-col items-center justify-center gap-6 rounded-xl p-6 text-center sm:min-w-[60%] md:min-w-[50%] lg:min-w-[40%] xl:min-w-[33%]"
                  >
                    <Image
                      src="/img/quote.svg"
                      alt="Alt quote"
                      className="h-20 w-auto max-w-[20rem] object-contain opacity-80 transition hover:opacity-100"
                      loading="lazy"
                      width={200}
                      height={200}
                    />

                    <p className="max-w-[30rem] text-sm leading-relaxed text-gray-300">
                      {slide.text}
                    </p>
                    <div className="mt-6 text-center">
                      <p className="font-semibold text-blue-400">
                        {slide.author}
                      </p>
                      <p className="text-sm text-gray-500">{slide.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="max-sm:hidden pointer-events-none absolute inset-y-0 left-0 w-24">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
                <div className="absolute inset-0 backdrop-blur-[1px]" />
              </div>

              <div className=" max-sm:hidden pointer-events-none absolute inset-y-0 right-0 w-24">
                <div className="absolute inset-0 bg-gradient-to-l from-black via-black/60 to-transparent" />
                <div className="absolute inset-0 backdrop-blur-[2px]" />
              </div>
            </div>

            <button
              onClick={() => nudge("left")}
              className="hidden h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-gray-700 sm:flex"
              aria-label="Move left"
            >
              <ArrowRight className="h-5 w-5 text-white" />
            </button>
          </div>

          <div className="flex gap-3 sm:hidden">
            <button
              onClick={() => nudge("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-gray-700"
              aria-label="Move right"
            >
              <ArrowLeft className="h-5 w-5 text-white" />
            </button>
            <button
              onClick={() => nudge("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-gray-700"
              aria-label="Move left"
            >
              <ArrowRight className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>

        <Button color="primary" className="mt-10">
          Learn More
        </Button>
      </div>
    </section>
  );
}
