"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { CaseStudy } from "./data";

type CaseStudyCardProps = {
  study: CaseStudy;
};

export const CaseStudyCard = ({ study }: CaseStudyCardProps) => {
  const Icon = study.icon;
  const midpoint = Math.ceil(study.bullets.length / 2);
  const left = study.bullets.slice(0, midpoint);
  const right = study.bullets.slice(midpoint);

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className="flex h-full flex-col gap-8 rounded-[2.5rem] border border-white/10 bg-[#0D0D11] p-8 text-white shadow-[0_20px_55px_-35px_rgba(0,0,0,0.7)] transition-transform duration-300 hover:-translate-y-2 sm:p-10"
    >
      <div className="relative overflow-hidden rounded-3xl bg-[#12121A]">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${study.accent} opacity-90`}
        />
        <div className="relative flex min-h-[12rem] items-center justify-center px-6 py-10 sm:min-h-[14rem]">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-black/70 text-white shadow-[0_20px_45px_rgba(10,132,255,0.25)]">
            <Icon className="h-10 w-10" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-semibold">{study.title}</h3>
        <p className="text-sm text-white/70">{study.description}</p>
        <p className="text-sm text-white/50">{study.summary}</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {[left, right].map((column, colIndex) => (
          <ul key={colIndex} className="space-y-2">
            {column.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/60"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href="#"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-black transition hover:scale-110"
        >
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </motion.article>
  );
};

