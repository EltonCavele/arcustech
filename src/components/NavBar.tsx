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

// Logo desacoplado e reutilizável
export const AcmeLogo: React.FC = () => {
  return (
    <svg
      fill="none"
      height="36"
      viewBox="0 0 32 32"
      width="36"
      aria-hidden="true"
      focusable="false"
    >
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

// Tipos dos itens de navegação
type NavLinkItem = {
  label: string;
  href: string;

  ariaCurrent?: "page" | undefined;
};

const centerLinks: NavLinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", ariaCurrent: "page" },
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
    <Navbar maxWidth="full" className={"bg-transparent "}>
      <div className="flex w-full max-w-7xl px-10  mx-auto">
        <NavbarBrand className="text-blue-400">
          <AcmeLogo />
          <p className="ml-2 font-bold ">{brandName}</p>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {links.map((item) => {
            const active =
              isActive(item.href, currentPath) || item.ariaCurrent === "page";
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
