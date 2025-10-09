"use client";

import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ServicesIntro } from "@/components/services/ServicesIntro";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black py-16 text-white sm:py-20 md:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 sm:px-6 lg:px-0">
        <ServicesIntro />
        <ServicesGrid />
      </div>
    </div>
  );
}
