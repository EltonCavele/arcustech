"use client";
import { Faq } from "@/components/Faq";
import { HeroComponent } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { WhyWeStarted } from "@/components/WhyWeStarted";

export default function Home() {
  return (
    <div className="  h-full min-h-screen">
      <HeroComponent />
      <Partners />
      <ServicesSection />
      <WhyChooseUs />
      <WhyWeStarted />
      <Faq />
    </div>
  );
}
