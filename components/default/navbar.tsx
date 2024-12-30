"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/react";

import Link from "next/link";
import ThemeSwitcher from "../ui/theme-switcher";
import Image from "next/image";
import { useState } from "react";
import DropdownUI from "../ui/dropdown";
import { usePathname } from "next/navigation";  


type Items = {
  label: string;
  href: string;
};
const items: Items[] = [
  {
    label: "Accueil",
    href: "/",
  },
  {
    label: "Location de Camion",
    href: "/location-camions",
  },
  {
    label: "Transport de Marchandises",
    href: "/transport-marchandises",
  },
  {
    label: "Travaux Publics",
    href: "/travaux-publics",
  },
  {
    label: "Contactez-nous",
    href: "/contact-us",
  },
];

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Navbar maxWidth="2xl" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <NavbarBrand>
          <Image
            src="/assets/images/logo.jpg"
            alt="logo"
            width={100}
            height={100}
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        {items.map((item) => {
          return (
            <NavbarItem key={item.href} className={`hover:underline ${pathname==item.href&&"bg-primary text-white py-1 px-2"}`}>
              <Link color="foreground" href={item.href}>
                {item.label}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent justify="end">
        <ThemeSwitcher />
        <DropdownUI />
      </NavbarContent>

      {/* Mobile Menu */}

      <NavbarMenu>
        {items.map((item) => {
          return (
            <NavbarMenuItem key={item.href} className="hover:underline bg-background p-2 text-center ">
              <Link color="foreground" href={item.href}>
                {item.label}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
}
