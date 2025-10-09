"use client";
import { Faq } from "@/componets/Faq";
import { Footer } from "@/componets/Footer";
import { HeroComponent } from "@/componets/Hero";
import { NavbarComponent } from "@/componets/NavBar";
import { Partners } from "@/componets/Partners";
import { ServicesSection } from "@/componets/ServicesSection";
import { WhyChooseUs } from "@/componets/WhyChooseUs";
import { WhyWeStarted } from "@/componets/WhyWeStarted";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  return (
    <div className="!bg-black  h-full min-h-screen">
      <NavbarComponent currentPath={pathname} brandName="ArcoTech" />
      <HeroComponent />
      <Partners />
      <ServicesSection />
      <WhyChooseUs />
      <WhyWeStarted />
      <Faq />
      <Footer />
    </div>
  );
}
