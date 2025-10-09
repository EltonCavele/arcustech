"use client";

import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

type ContactCardProps = {
  title: string;
  description?: string;
  actions?: ReactNode;
  items?: Array<{
    label: string;
    value: string;
    icon: LucideIcon;
  }>;
};

export const ContactCard = ({
  title,
  description,
  actions,
  items,
}: ContactCardProps) => {
  return (
    <div className="flex h-full flex-col gap-6 rounded-[2.5rem] border border-white/10 bg-[#0E0E12] p-6 text-white shadow-[0_20px_55px_-35px_rgba(0,0,0,0.6)] sm:p-8">
      <h2 className="text-lg font-semibold">{title}</h2>
      {description ? <p className="text-sm text-white/70">{description}</p> : null}

      {items ? (
        <ul className="space-y-4 text-sm text-white/80">
          {items.map(({ label, value, icon: Icon }) => (
            <li key={label} className="flex gap-3">
              <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-white/60">
                  {label}
                </p>
                <p className="whitespace-pre-line text-sm">{value}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : null}

      {actions ? <div className="mt-auto">{actions}</div> : null}
    </div>
  );
};
