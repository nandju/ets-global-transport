"use client";
import Link from "next/link";
import ThemeSwitcher from "../ui/theme-switcher";
import { Button } from "@nextui-org/react";

export default function Navbar() {
  return (
    <nav className="bg-background text-foreground p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg sm:text-2xl lg:text-2xl font-bold font-mono">
          <Link href="/">ETS Global Transport</Link>
        </div>

        {/* Navigation Links */}
        <div className="sm:space-x-4 lg:space-x-4 space-x-0 hidden sm:flex lg:flex">
          <Link href="/" className="hover:underline">
            Accueil
          </Link>
          <Link href="/location-camions" className="hover:underline">
            Location de Camion
          </Link>
          <Link href="/transport-marchandises" className="hover:underline">
            Transport de Marchandises
          </Link>
          <Link href="/travaux-publics" className="hover:underline">
            Travaux Publics
          </Link>
          <Link href="/contact-us" className="hover:underline">
            Contactez-nous
          </Link>
        </div>
        <ThemeSwitcher />
        <Button color="primary">Souscrire</Button>
      </div>
    </nav>
  );
}