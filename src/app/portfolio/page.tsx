"use client";

import { CaseStudiesFilters } from "@/components/case-studies/CaseStudiesFilters";
import { CaseStudiesGrid } from "@/components/case-studies/CaseStudiesGrid";
import { CaseStudiesIntro } from "@/components/case-studies/CaseStudiesIntro";

export default function PortfolioPage() {
  return (
    <div className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute left-0 top-0 h-[28rem] w-[28rem] opacity-30">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15)_1px,_transparent_1.5px)] bg-[length:16px_16px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center px-4 py-16 sm:px-6 md:py-24 lg:px-0">
        <CaseStudiesIntro />
        <CaseStudiesFilters />
        <CaseStudiesGrid />
      </div>
    </div>
  );
}
