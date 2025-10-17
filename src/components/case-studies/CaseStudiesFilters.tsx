"use client";

import { Button, Chip, Input } from "@heroui/react";
import { Search } from "lucide-react";

const FILTER_ITEMS = [
  {
    label: "Machine Learning",
    variant: "featured" as const,
  },
  {
    label: "Data Engineering",
    variant: "highlight" as const,
  },
  {
    label: "Blockchain",
    variant: "muted" as const,
  },
];

const chipStyles: Record<(typeof FILTER_ITEMS)[number]["variant"], string> = {
  featured:
    "border border-primary/40 bg-primary/20 text-white text-xs font-semibold shadow-[0_0_20px_rgba(21,164,255,0.15)] hover:border-primary hover:bg-primary/30",
  highlight:
    "border border-primary/30 bg-primary/15 text-white text-xs font-semibold hover:border-primary/60 hover:bg-primary/25",
  muted:
    "border border-white/10 bg-black/50 text-white/70 text-xs font-medium hover:border-primary/40 hover:text-white",
};

export const CaseStudiesFilters = () => {
  return (
    <div className="mt-10 flex w-full flex-col gap-4 text-white">
      <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-[#0B0B10]/80 p-5 backdrop-blur-sm md:flex-row md:items-center md:justify-between">
        <Input
          variant="bordered"
          radius="full"
          size="md"
          startContent={<Search className="h-5 w-5 text-white/60" />}
          placeholder="Search by keywords..."
          className="md:max-w-lg"
          classNames={{
            inputWrapper:
              "bg-black/60 border border-white/10 px-4 data-[hover=true]:border-primary/40",
            input: "text-sm text-white placeholder:text-white/40",
          }}
        />

        <div className="flex flex-wrap items-center gap-3">
          {FILTER_ITEMS.map((filter) => (
            <Chip
              key={filter.label}
              variant="flat"
              classNames={{
                base: `rounded-full px-4 py-2 transition ${
                  chipStyles[filter.variant]
                }`,
              }}
            >
              {filter.label}
            </Chip>
          ))}

          <Button
            size="sm"
            radius="full"
            color="primary"
            className="px-4 py-2 text-xs font-semibold text-black transition hover:brightness-110"
          >
            Clear All
          </Button>
        </div>
      </div>
    </div>
  );
};
