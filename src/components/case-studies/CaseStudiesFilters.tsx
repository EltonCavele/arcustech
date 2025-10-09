"use client";

import { Search } from "lucide-react";

export const CaseStudiesFilters = () => {
  return (
    <div className="mt-10 flex w-full flex-col gap-4 text-white">
      <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-[#0B0B10]/80 p-5 backdrop-blur-sm md:flex-row md:items-center md:justify-between">
        <div className="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-black/60 px-4 py-3 md:max-w-lg">
          <Search className="h-5 w-5 text-white/60" />
          <input
            type="text"
            placeholder="Search by keywords..."
            className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
          />
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-black transition hover:scale-105">
            <Search className="h-4 w-4" />
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button className="rounded-full border border-primary/40 bg-primary/15 px-4 py-2 text-xs font-semibold text-white transition hover:border-primary hover:bg-primary/25">
            Machine Learning
          </button>
          <button className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold text-white transition hover:border-primary hover:bg-primary/20">
            Data Engineering
          </button>
          <button className="rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium text-white/70 transition hover:border-primary/40 hover:text-white">
            Blockchain
          </button>
          <button className="rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium text-white/70 transition hover:border-primary/40 hover:text-white">
            Predictive Analytics
          </button>
          <button className="rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium text-white/70 transition hover:border-primary/40 hover:text-white">
            MLOps
          </button>
          <button className="rounded-full border border-primary bg-primary px-4 py-2 text-xs font-semibold text-black transition hover:brightness-110">
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};
