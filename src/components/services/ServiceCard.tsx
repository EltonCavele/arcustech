"use client";

import { ArrowRight, LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
};

export const ServiceCard = ({
  title,
  description,
  points,
  icon,
}: ServiceCardProps) => {
  const Icon = icon;

  return (
    <article className="group flex h-full flex-col justify-between gap-10 rounded-[2.5rem] border border-white/10 bg-[#0C0C10] p-8 text-white shadow-[0_25px_60px_-35px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-2 sm:p-10">
      <div className="flex flex-col  items-center gap-8 text-center sm:text-left">
        <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 text-primary sm:h-28 sm:w-28">
          <Icon className="h-9 w-9" />
        </div>
        <div className="flex flex-col text-center gap-4">
          <h3 className="text-xl font-semibold sm:text-2xl">{title}</h3>
          <p className="text-sm text-white/70 sm:text-base">{description}</p>
        </div>
      </div>

      <ul className="grid gap-3 text-sm text-white/70 sm:grid-cols-2">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="flex justify-center ">
        <a
          href="#"
          className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-sm font-medium text-white transition hover:border-primary/60 hover:bg-primary/20"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-black transition group-hover:translate-x-0.5">
            <ArrowRight className="h-4 w-4" />
          </span>
          <span className="pr-2">Book a Call</span>
        </a>
      </div>
    </article>
  );
};
