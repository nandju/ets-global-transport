"use client"

import { Button } from "@nextui-org/react";
import Link from "next/link";

type Camion = {
  picture: string;
  title: string;
  subtitle: string;
  link: string;
};

const camions: Camion[] = [
  {
    picture: "/assets/images/camions-bernes-removebg-preview.png",
    title: "Camions-bennes",
    subtitle: "Transport de matériaux lourds avec bennes arrière ou latérales (jusqu'à 30 tonnes)",
    link: "#",
  },
  {
    picture: "/assets/images/camions-citernes-removebg-preview.png",
    title: "Camions-citernes",
    subtitle: "Transport de liquides avec des citernes de 5 000 à 30 000 litres",
    link: "#",
  },
  {
    picture: "/assets/images/camions-plateaux-removebg-preview.png",
    title: "Camions plateaux",
    subtitle: "Transport de marchandises volumineuses (10 à 40 tonnes)",
    link: "#",
  },
  {
    picture: "/assets/images/camions-grues-removebg-preview.png",
    title: "Camions-grues",
    subtitle: "Manutention et transport de charges lourdes avec capacité de levage jusqu'à 50 tonnes",
    link: "#",
  },
];

export default function CamionsProducts() {
  return (
    <div className="flex flex-col items-center bg-muted p-6 lg:p-20">
      {/* Grid Container */}
      <div className="flex flex-col gap-8 w-full">
        {camions.map((camion) => (
          <div key={camion.title} className="relative flex size-full items-center justify-center overflow-hidden bg-muted p-20">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-12 p-8 bg-muted">
      {/* Image Section */}
      <div className="relative w-72 h-72 lg:w-96 lg:h-96">
        <img 
          src={camion.picture}
          alt={camion.title} 
          className="w-full h-full object-cover object-center shadow-lg"
        />
      </div>
    
      {/* Text Section */}
      <div className="max-w-2xl text-center lg:text-left flex flex-col gap-4">
        <div>
        <h2 className="text-3xl font-extrabold text-primary mb-4">
          {camion.title}
        </h2>
        <p className="text-lg text-foreground leading-relaxed">
         {camion.subtitle}
        </p>
        </div>
        <Button color="primary" variant="shadow">
          <Link href={camion.link}>Payer</Link>
        </Button>
      </div>
    </div>
    
          
        </div>
        ))}
      </div>
    </div>
  );
}
