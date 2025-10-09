"use client";

import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { ReactNode } from "react";
import { AcmeLogo } from "./NavBar";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#" },
  { label: "Portfolio", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Careers", href: "#" },
];

const SOCIAL_LINKS = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-black py-16 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <AcmeLogo />
            <p className="ml-2 font-bold ">ArcuTech</p>
          </div>

          <nav className="flex flex-wrap items-center gap-6 text-sm text-white/70">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-center">
            <div className="flex gap-4 rounded-xl border border-white/5 px-5 py-3">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gradient-to-b from-white/10 to-white/0 text-lg font-semibold text-primary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items-start gap-4 text-sm text-white/70 md:flex-row md:items-center md:gap-8">
            <ContactItem
              icon={<Mail className="h-4 w-4 text-primary" />}
              label="contact@catalystanalytics.io"
            />
            <ContactItem
              icon={<Phone className="h-4 w-4 text-primary" />}
              label="+1 (469) 712-4672"
            />
            <ContactItem
              icon={<MapPin className="h-4 w-4 text-primary" />}
              label="5511 Parkcrest Dr, Suite 103, Austin, TX 78731"
            />
          </div>

          <div className="flex gap-6 text-sm text-white/60">
            <a href="#" className="transition hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-primary">
              Terms of Service
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-white/40">
          © 2025 Catalyst Analytics. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const ContactItem = ({ icon, label }: { icon: ReactNode; label: string }) => (
  <div className="flex items-center gap-2">
    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5">
      {icon}
    </span>
    <span>{label}</span>
  </div>
);
