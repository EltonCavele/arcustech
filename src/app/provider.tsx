"use client";

import { Footer } from "@/components/Footer";
import { NavbarComponent } from "@/components/NavBar";
import { usePathname } from "next/navigation";

export const Provider = ({ children }: any) => {
  const pathname = usePathname();
  return (
    <div className="!bg-black">
      <NavbarComponent currentPath={pathname} brandName="ArcusTech" />
      {children}
      <Footer />
    </div>
  );
};
