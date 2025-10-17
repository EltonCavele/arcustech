// NavbarComponent.tsx
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import Image from "next/image";

type NavLinkItem = {
  label: string;
  href: string;
};

const centerLinks: NavLinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/about" },
];

function isActive(href: string, currentPath?: string): boolean {
  if (!currentPath) return false;

  const normalizedHref = href.replace(/\/+$/, "");
  const normalizedPath = currentPath.replace(/\/+$/, "");
  if (normalizedHref === "") return normalizedPath === "";
  return (
    normalizedPath === normalizedHref ||
    normalizedPath.startsWith(normalizedHref + "/")
  );
}

export type NavbarComponentProps = {
  currentPath?: string;
  brandName?: string;
  links?: NavLinkItem[];

  className?: string;
};

export function NavbarComponent({
  currentPath,
  brandName = "ACME",
  links = centerLinks,
}: NavbarComponentProps) {
  return (
    <Navbar maxWidth="full" className={"bg-transparent"}>
      <div className="flex items-center w-full max-w-7xl px-10  mx-auto">
        <NavbarBrand className=" items-center gap-2 ">
          <Image
            alt="Logo"
            src="/logo.png"
            width={200}
            height={200}
            className="w-8 h-8"
          />
          <p className="font-bold text-white ">{brandName}</p>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {links.map((item) => {
            const active = isActive(item.href, currentPath);
            return (
              <NavbarItem key={item.href} isActive={active}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={
                    active ? "text-white" : "text-white/80 hover:text-white"
                  }
                >
                  {item.label}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" href="/contact" variant="solid">
              Contact Us
            </Button>
          </NavbarItem>
        </NavbarContent>
      </div>
    </Navbar>
  );
}
