"use client"

import { WordRotate } from "./wordrotate";
import DropdownUI from "./dropdown1";

export default function Hero() {
  return (
    <div className="relative flex items-center justify-between w-full h-[calc(100vh-100px)]">
      <img
        className="absolute inset-0 w-full h-full object-cover shrink-0"
        src="https://images.unsplash.com/photo-1709086566068-3a5d99097f7f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="herosection"
      />
      <div className="absolute w-full h-full bg-black/25 px-4"></div>
      <div className="absolute px-4 inset-0 flex flex-col items-center justify-center text-center text-white text-xl sm:text-2xl lg:text-2xl font-semibold gap-20 lg:gap-32">
        {/* Texte principal */}
        <WordRotate 
        className="text-2xl md:text-5xl lg:text-7xl  max-w-screen-sm lg:max-w-screen-lg font-bold"
        words={["Des services de transport sur mesure pour une logistique sans faille", "Camions variés pour une gestion flexible de vos besoins de transport", "Transport rapide et fiable pour la livraison de vos marchandises", "Solutions efficaces pour vos travaux publics avec un équipement moderne"]} />

        {/* Bouton bien espacé */}
        <DropdownUI/>
      </div>
      {/* Bouton gauche */}
      <div className="absolute hidden sm:flex lg:flex left-4 top-1/2 transform -translate-y-1/2 px-6 py-4 text-foreground bg-background rounded-full shadow-md cursor-pointer hover:bg-gray-200 transition">
        {"<"}
      </div>
      {/* Bouton droit */}
      <div className="absolute hidden sm:flex lg:flex right-4 top-1/2 transform -translate-y-1/2 px-6 py-4 text-foreground bg-background rounded-full shadow-md cursor-pointer hover:bg-gray-200 transition">
        {">"}
      </div>
    </div>
  );
}
