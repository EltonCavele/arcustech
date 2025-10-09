"use client";

import { Button } from "@heroui/react";
import { ContactCard } from "@/components/contact/ContactCard";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactIntro } from "@/components/contact/ContactIntro";
import { contactMethods } from "@/components/contact/data";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black px-4 py-16 text-white sm:px-6 md:py-24 lg:px-0">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <ContactIntro />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <ContactForm />

          <div className="flex flex-col gap-8">
            <ContactCard
              title="Contact Information"
              items={contactMethods.map((method) => ({
                label: method.label,
                value: method.value,
                icon: method.icon,
              }))}
            />

            <ContactCard
              title="Contact Information"
              description="Want to discuss your project in detail? Schedule a free 30-minute consultation with our team of experts. We'll help you understand how our solutions can benefit your business."
              actions={
                <Button
                  color="primary"
                  className="w-full rounded-2xl font-semibold text-black"
                >
                  Book a Meeting
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
